import React from 'react';
import Style from './Login.module.css';
import { logins, logouta } from '../utils';

class Student extends React.Component  {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleLogin(){
        logins(); logouta();
        this.props.history.push('/Studenthome');
    }

  handleClick (){
       this.props.history.push('/Admin');
    }
 render(){
    return (
      <div>
      <div className={Style.topRight}>
      Are you an Administrator?   
      <button className={Style.button2} onClick={this.handleClick}>Login</button>
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
        <button type="submit" className={Style.button3} onClick={this.handleLogin}>Login</button>
        </div>
        </div>
      </div>
    );
}}
export default Student;
