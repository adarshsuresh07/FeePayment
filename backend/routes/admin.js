var express = require('express');
var router = express.Router();
var db = require('../mysql-config');
var pass = require('../passport-config');
const cors = require('./cors');
const depts = {
  'CS':'Computer Science & Engineering',
  'EC':'Electronics & Communication Engineering',
  'CE':'Civil Engineering',
  'ME':'Mechanical Engineering',
  'AE':'Applied Electronics',
  'EE': 'Electrical & Electronics Engineering',
  'IE': 'Industrial Engineering',
  'AR': 'Architecture'
};

router.options('/', cors.corsWithOptions, (req,res) => {res.sendStatus(200); })
router.get('/',cors.corsWithOptions, pass.verifyUser, function(req, res, next) {
  const query = "SELECT username,name,role from users where username='"+req.user.username+"'";
  db.query(query, (err,result) => {
      res.statusCode = 200;
      res.json(result[0]);
  });
});

router.options('/:studentId', cors.corsWithOptions, (req,res) => {res.sendStatus(200); })
router.get('/:studentId',cors.corsWithOptions, pass.verifyUser, function(req, res, next) {
  const query = "SELECT s.admno,s.name,s.sem,s.dept,s.paidOrNot,c.scholname,f.deadline,DATE_FORMAT(f.deadline,'%d %M %Y') as dlday FROM students s,fees f,scholarships c WHERE s.sem=f.sem and s.scholId=c.scholId and s.admno="+req.params.studentId;
  db.query(query,function(err,result){
    let fine = 'No';
    let paid = result[0].paidOrNot === 0?'No':'Yes';
    let today = new Date();
    let dayslate = Math.floor((today.getTime() - result[0].deadline.getTime())/(1000*60*60*24));
    if(dayslate>0) {
      fine = 'Yes';
    }
    let dept = depts[result[0].dept];
    res.statusCode = 200;
    let row = Object.assign(
      {
        'admno': result[0].admno,
        'name': result[0].name,
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

module.exports = router;