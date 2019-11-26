var express = require('express');
var router = express.Router();
var db = require('../mysql-config');
var pass = require('../passport-config');
const cors = require('./cors');
const depts = {
  'CS': 'Computer Science & Engineering',
  'EC': 'Electronics & Communication Engineering',
  'CE': 'Civil Engineering',
  'ME': 'Mechanical Engineering',
  'AE': 'Applied Electronics',
  'EE': 'Electrical & Electronics Engineering',
  'IE': 'Industrial Engineering',
  'AR': 'Architecture'
};

//get student dashboard
router.options('/', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
router.get('/', cors.corsWithOptions, pass.verifyUser, function (req, res, next) {
  const query = "SELECT s.admno,s.name,s.programme,s.sem,s.dept,s.paidornot,c.scholname,f.deadline,DATE_FORMAT(f.deadline,'%d %M %Y') as dlday FROM students s,fees f,scholarships c WHERE s.sem=f.sem and s.programme=f.programme and s.scholid=c.scholid and s.admno=" + req.user.username;
  db.query(query, function (err, result) {
    let fine = 'No';
    let paid = result[0].paidornot === 0 ? 'No' : 'Yes';
    let today = new Date();
    let dayslate = Math.floor((today.getTime() - result[0].deadline.getTime()) / (1000 * 60 * 60 * 24));
    if (dayslate > 0) {
      fine = 'Yes';
    }
    let dept = depts[result[0].dept];
    res.statusCode = 200;
    let row = Object.assign(
      {
        'admno': result[0].admno,
        'name': result[0].name,
        'prog': result[0].programme,
        'sem': result[0].sem,
        'schol': result[0].scholname,
        'deadline': result[0].dlday,
        'dept': dept,
        'fine': fine,
        'paid': paid
      }
    );
    res.json(row);
  });
});

//get confimation page details
router.options('/confirmation', cors.corsWithOptions, (req, res) => { res.sendStatus(200); })
router.get('/confirmation', cors.corsWithOptions, pass.verifyUser, function (req, res, next) {
  const query = "SELECT s.admno,s.name,s.programme,s.sem,s.dept,c.scholname,f.amount,f.deadline,DATE_FORMAT(f.deadline,'%d %M %Y') as dlday,c.concession FROM students s,fees f,scholarships c WHERE s.sem=f.sem and s.programme=f.programme and s.scholId=c.scholId and s.admno=" + req.user.username;
  db.query(query, function (err, result) {
    let fine = 0;
    let today = new Date();
    let dayslate = Math.floor((today.getTime() - result[0].deadline.getTime()) / (1000 * 60 * 60 * 24));
    if (dayslate > 0) {
      if (dayslate == 1)
        fine = 10;
      else {
        let exp = Math.floor(dayslate / 2);
        fine = Math.pow(2, exp - 1) * 10;
      }
    }
    let dept = depts[result[0].dept];
    let concession = result[0].concession;
    res.statusCode = 200;
    let totalFee = result[0].amount + fine - concession;
    let row = Object.assign(
      {
        'admno': result[0].admno,
        'name': result[0].name,
        'prog': result[0].programme,
        'sem': result[0].sem,
        'scholname': result[0].scholname,
        'deadline': result[0].dlday,
        'dept': dept,
        'dayslate': dayslate,
        'fee': result[0].amount,
        'fine': fine,
        'concession' : concession,
        'totalfee': totalFee
      }
    );
    res.json(row);
  });
});
module.exports = router;
