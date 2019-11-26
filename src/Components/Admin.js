import React from 'react';
import { logina, logouts, logouta } from '../utils';
import Style from './css/Admin.module.css';
import Axios from 'axios'
class Admin extends React.Component {
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
    this.setState({ [target.name]: target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    if (this.state.username === '' || this.state.password === '') {
      this.setState({ error: 'ID & Password should not be empty' });
    }
    else {
      Axios.post('http://localhost:3001/users/login', {
        username: this.state.username,
        password: this.state.password,
        role: 'admin'
      })
        .then(res => {
          if (res.data.success) {
            logina(res.data.token);
            this.setState({ error: '' });
            this.props.history.push('/Adminhome');
          }
        }).catch(err => {
          this.setState({ error: 'Invalid ID or Password', password: '' });
        });
    }
  }

  handleClick = () => {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className={Style.wrap}>
        <div className={Style.row}>
          <div className={Style.leftcolumn}>
            <div className={Style.imagecss}>
              <img src={require("./cet.png")} alt="College of Engineering Trivandrum" />
            </div>
          </div>
          <div className={Style.rightcolumn}>
            <div className={Style.formstudent}>
              <div>
                <div className={Style.inactive} onClick={this.handleClick}>Student</div>
                <div className={Style.tabbutton}>Admin</div>
              </div>
              <form >
                {this.state.error.length > 0 && (<span className={Style.error} > {this.state.error} </span>)}
                <input type="text" id="username" name="username" placeholder="CET ID Number" className={Style.input1} value={this.state.username} onChange={this.handleChange} required />
                <input type="password" id="password" name="password" placeholder="Password" className={Style.input1} value={this.state.password} onChange={this.handleChange} required />
                <button type="submit" className={Style.login} onClick={this.handleLogin}>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}


export default Admin;
