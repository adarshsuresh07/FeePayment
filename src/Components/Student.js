import React from 'react';
import Style from './Login.module.css';
import { logins, logouta, logouts } from '../utils';
import Axios from 'axios';

class Student extends React.Component  {
  constructor(props){
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  };

  componentDidMount = () => {
    logouta();
    logouts();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleLogin(){
    Axios.post('http://localhost:3001/users/login',{
      username: this.state.username,
      password: this.state.password,
      role: 'student'
    })
    .then(res => {
      if(res.data.success) {
        logins(res.data.token);
        this.props.history.push('/Studenthome');
      }  
    });
  };

  handleClick (){
    this.props.history.push('/Admin');
  };
 render(){
    return (
      <div studentwrap>
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
        <input type="text" id="username" name="username" placeholder="UserName" value={this.state.username} onChange={this.handleChange} />
        <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
        <button type="submit" className={Style.button3} onClick={this.handleLogin}>Login</button>
        </div>
        </div>
      </div>
    );
}}
export default Student;
