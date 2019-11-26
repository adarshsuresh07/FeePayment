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
  dateIST.setHours(dateIST.getHours() + 5);
  dateIST.setMinutes(dateIST.getMinutes() + 30);
  return dateIST;
}

paymentRouter.options('*', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })

//commence payment
paymentRouter.post('/', cors.corsWithOptions, pass.verifyUser, (req, res) => {
  stripe.customers.create({
    name: req.user.username,
    email: req.body.email,
    source: req.body.token.id,
  })
    .then(customer => {
      stripe.charges.create({
        amount: req.body.amount,
        currency: "inr",
        customer: customer.id
      })
        .then(charge => {
          let date = getISTDate();
          date = date.toISOString().slice(0, 19).replace('T', ' ');
          let query = "UPDATE students SET paidornot=1, dateofpayment='" + date + "' WHERE admno='" + req.user.username + "'";
          db.query(query, (err, result) => {
            if (err) {
              console.log(query);
              console.log(err);
              res.status(500).send(err);
            }
            else {
              res.send({ success: true });
            }
          });
        })
        .catch(err => {
          console.log("Error: ", err);
          res.status(500).send({ error: err });
        });
    })
    .catch(err => {
      res.status(500).send({ error: err });
    })
});

module.exports = paymentRouter;
