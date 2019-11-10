var express = require('express');
var router = express.Router();
var db = require('../mysql-config');
var pass = require('../passport-config');
const cors = require('./cors');
const depts = {
  'CS':'Computer Science and Engineering',
  'EC':'Electronics and Communication Engineering',
  'CE':'Civil Engineering',
  'ME':'Mechanical Engineering',
  'AE':'Applied Electronics',
  'EE': 'Electrical and Electronics Engineering',
  'IE': 'Industrial Engineering',
  'AR': 'Architecture'
};

/* GET users listing. */
router.options('/', cors.corsWithOptions, pass.verifyUser, (req,res) => {res.sendStatus(200); })
router.get('/',cors.corsWithOptions, pass.verifyUser, function(req, res, next) {
  console.log(req.user);
  const query = "SELECT username,name,role from users where username='"+req.user.username+"'";
  db.query(query, (err,result) => {
    console.log(result[0]);
    if(result[0].role == 'student') {
      const query = "SELECT s.admno,s.name,s.sem,s.dept,s.paidOrNot,c.scholname,f.deadline,DATE_FORMAT(f.deadline,'%d %M %Y') as dlday FROM students s,fees f,scholarships c WHERE s.sem=f.sem and s.scholId=c.scholId and s.admno="+req.user.username;
      db.query(query,function(err,result){
        let fine = 0;
        let paid = result[0].paidOrNot === 0?'No':'Yes';
        console.log(result);
        let today = new Date();
        let dayslate = (today.getTime() - result[0].deadline.getTime())/(1000*60*60*24);
        if(dayslate>0) {
          fine = 10;
          dayslate/=2;
          fine+=dayslate*10;
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
        console.log(row);
        res.json(row);
      });
    }
    else {
      res.statusCode = 200;
      res.json(result[0]);
    }
  });
});

module.exports = router;
