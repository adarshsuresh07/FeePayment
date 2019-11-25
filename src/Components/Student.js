import React from 'react';
import Style from './css/Student.module.css';
import { logins, logouta, logouts, isLogins } from '../utils';
import Axios from 'axios';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  };
  componentDidMount = () => {
    logouta();
    logouts();
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value, error: '' });
  };

  handleLogin(e) {
    e.preventDefault();
    if (this.state.username == '' || this.state.password == '') {
      this.setState({ error: 'Username and Password fields should not be empty' });
    }
    else {
      Axios.post('http://localhost:3001/users/login', {
        username: this.state.username,
        password: this.state.password,
        role: 'student'
      })
        .then(res => {
          logins(res.data.token);
          this.props.history.push('/Studenthome');
        })
        .catch(err => {
          this.setState({ error: 'Invalid Username or Password', password: ''});
        });
    }
  };

  handleClick(){
    this.props.history.push('/Admin');
  };
render(){
  const { error } = this.state;
  return (
    <div className={Style.wrap}>
      <div className={Style.row}>
        <div className={Style.leftcolumn}>
          <div className={Style.imagecss}>
            <img src={require("./cet.png")} />
          </div>
        </div>
        <div className={Style.rightcolumn}>
          <div className={Style.formstudent}>
            <div>
              <button className={Style.tabbutton}>Student</button>
              <button className={Style.inactive} onClick={this.handleClick}>Admin</button>
            </div>
            {this.state.error.length > 0 && (<span className="errorInvalid" > {this.state.error} </span>)}
            <form >
              <input type="text" id="username" name="username" placeholder="Admission Number" className={Style.input1} value={this.state.username} onChange={this.handleChange} required />
              <input type="password" id="password" name="password" placeholder="Password" className={Style.input1} value={this.state.password} onChange={this.handleChange} required />
              <button type="submit" className={Style.login} onClick={this.handleLogin}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}}
export default Student;
