const express = require('express');
const cors = require('./cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var pass = require('../passport-config');
var db = require('../mysql-config');
const paymentRouter = express.Router();

function getISTDate() {
  let dateUTC = new Date();
  dateUTC = dateUTC.getTime() 
  let dateIST = new Date(dateUTC);
  //date shifting for IST timezone (+5 hours and 30 minutes)
  dateIST.setHours(dateIST.getHours() + 5); 
  dateIST.setMinutes(dateIST.getMinutes() + 30);
  return dateIST;
}

paymentRouter.options('*',cors.corsWithOptions, (req,res) => {res.sendStatus(200); })

paymentRouter.post('/', cors.corsWithOptions, pass.verifyUser, (req,res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr"
  };
  stripe.charges.create(body)
  .then(charge => {
    let date = getISTDate();
    date = date.toISOString().slice(0, 19).replace('T', ' ');
    let query = "UPDATE students SET paidornot=1, dateofpayment='"+date+"' WHERE admno='"+req.user.username+"'";
    db.query(query, (err,result) => {
      if(err){
        console.log(query);
        console.log(err);
        res.status(500).send(err);
      }  
      else {
        res.send({success: true});
      }  
    });
  })
  .catch(err => {
    console.log("Error: ",err);
    res.status(500).send({error: 'Payment failed'});
  });
});

module.exports = paymentRouter;
