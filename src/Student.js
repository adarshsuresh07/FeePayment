import React from 'react';
import Style from './Login.module.css';
class Student extends React.Component {
render(){
 return (
  <div className={Style.login}>
  <div className={Style.imagecss}>
  <img src={require("./cet.png")}/>
  <hr/>
  </div>
  <div className={Style.formstudent}>
  <span>Student</span><br/><br/>
  <input type="text" name="uname" placeholder="UserName" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit" className={Style.button3}>Submit</button>
</div>
</div>

  );
}
}

export default Student;
