const express = require('express');
const cors = require('./cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var pass = require('../passport-config');
var db = require('../mysql-config');
const paymentRouter = express.Router();

// const stripeChargeCallback = res => (stripeErr,stripeRes) => {
//   if(stripeErr)
//     res.status(500).send({error: StripeErr});
//   else
//     res.status(200).send({success: stripeRes});  
// };

// function curDateInIST() {
//   let date = new Date();
//   console.log(date);
//   let localTime = date.getTime();
//   let localOffset = date.getTimezoneOffset()*60000;
//   console.log(localOffset);
//   let utc = localTime + localOffset;
//   let utcdate = new Date(utc);
//   console.log(utcdate);
//   let offset = 5.5;
//   let ist = utc+(3600000*offset);
//   let istDate = new Date(ist);
//   return istDate;
// }

paymentRouter.options('*',cors.corsWithOptions, (req,res) => {res.sendStatus(200); })

paymentRouter.post('/', cors.corsWithOptions, pass.verifyUser, (req,res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "inr"
  };
  stripe.charges.create(body)
  .then(charge => {
    let date = new Date();
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
