import React from 'react';
import { logina, logouts } from '../utils';
import Style from './Login.module.css';
class Admin extends React.Component  {
    constructor(props){
      super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    }
  
    handleLogin = () => {
        logina(); logouts();
       this.props.history.push('/Adminhome');
    }

    handleClick = () => {
        this.props.history.push('/');
    }
render(){
    return (
      <div>
      <div className={Style.topRight}>
      Are you a Student?   
      <button className={Style.button2} onClick={this.handleClick}>Login</button>
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
      <button type="submit" className={Style.button4} onClick={this.handleLogin}>Login</button>
      </div>
      </div>
      </div>

  );
}
}


export default Admin;
