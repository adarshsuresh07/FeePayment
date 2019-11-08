import React from 'react';
import Style from './Login.module.css';
import { logins, logouta } from '../utils';

const Student = (props) => {
  
    const handleLogin = () => {
        logins(); logouta();
        props.history.push('/Studenthome');
    }

    const handleClick = () => {
        props.history.push('/Admin');
    }

    return (
      <div>
      <div className={Style.topRight}>
      Are you an Administrator?   
      <button className={Style.button2} onClick={() => handleClick()}>Login</button>
      </div>
        <div className={Style.login}>
        <div className={Style.imagecssstudent}>
        <img src={require("./cet.png")}/>
        <hr/>
        </div>
        <div className={Style.formstudent}>
        <span>Student</span><br/><br/>
        <input type="text" name="uname" placeholder="UserName" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" className={Style.button3} onClick={() =>handleLogin()}>Login</button>
        </div>
        </div>
      </div>
    );
}
export default Student;
