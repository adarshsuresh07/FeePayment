import React from 'react';
import { logina, logouts } from '../utils';
import Style from './Login.module.css';
const Admin = (props) => {
  
    const handleLogin = () => {
        logina(); logouts();
        props.history.push('/Adminhome');
    }

    const handleClick = () => {
        props.history.push('/');
    }

    return (
      <div>
      <div className={Style.topRight}>
      Are you a Student?   
      <button className={Style.button2} onClick={() => handleClick()}>Login</button>
      </div>
      <div className={Style.login}>
      <div className={Style.imagecssadmin}>
      <img src={require("./cet.png")}/>
      <hr/>
      </div>
      <div className={Style.formadmin}>
      <span>Admin</span><br/><br/>
      <input type="text" name="uname" placeholder="UserName" />
      <input type="password" name="password" placeholder="Password" />
      <button type="submit" className={Style.button4} onClick={() =>handleLogin()}>Login</button>
      </div>
      </div>
      </div>

  );
}


export default Admin;
