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

router.options('/search', cors.corsWithOptions, (req,res) => {res.sendStatus(200); })
router.get('/search',cors.corsWithOptions, pass.verifyUser, function(req, res, next) {
  let query = "SELECT s.admno,s.name,s.sem,s.dept,s.paidOrNot,c.scholname,f.deadline,DATE_FORMAT(f.deadline,'%d %M %Y') as dlday FROM students s,fees f,scholarships c WHERE s.sem=f.sem and s.scholId=c.scholId";
  let keys = Object.keys(req.body);
  let values = Object.values(req.body);
  for(let i=0;i<keys.length;++i) {
    let table = 's';
    if(keys[i] == 'scholname') {
      table = 'c';
    }
    query+=(" and "+table+"."+keys[i]+"='"+values[i]+"'");
  }
  db.query(query,function(err,result){
    if(err)
      return res.json({error: true, msg: 'Something went wrong'});
    if(result.length == 0) {
      return res.json({error: true, msg: 'No students found'});
    }
    let rows = [];
    result.forEach((row) => {
      let fine = 'No';
      let paid = row.paidOrNot === 0?'No':'Yes';
      let today = new Date();
      let dayslate = Math.floor((today.getTime() - row.deadline.getTime())/(1000*60*60*24));
      if(row.paidOrNot && dayslate>0) {
        fine = 'Yes';
      }
      let dept = depts[row.dept];
      res.statusCode = 200;
      let resRow = Object.assign(
        {
          'admno': row.admno,
          'name': row.name,
          'sem': row.sem,
          'schol': row.scholname,
          'deadline': row.dlday,
          'dept': dept, 
          'fine': fine, 
          'paid': paid,
          'error': false
        }
      );
      rows.push(resRow);
    });
    res.json(rows);
  });
});

module.exports = router;