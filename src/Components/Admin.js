import React from 'react';
import { logina, logouts, logouta } from '../utils';
import Style from './css/Admin.module.css';
import Axios from 'axios'
class Admin extends React.Component  {
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

    handleLogin = (e) => {
      e.preventDefault();
      Axios.post('http://localhost:3001/users/login',{
        username: this.state.username,
        password: this.state.password,
        role: 'admin'
      })
      .then(res => {
        if(res.data.success) {
          logina(res.data.token);
          this.props.history.push('/Adminhome');
        }  
      });
    }

    handleClick = () => {
        this.props.history.push('/');
    }
render(){
    return (
      <div adminwrap>
      <div className={Style.topRight}>
      Are you a Student?   
      <button className={Style.button2} onClick={this.handleClick}>Login</button>
      </div>
      <div className={Style.login}>
      <div className={Style.imagecssadmin}>
      <img src={require("./cet.png")}/>
      <hr/>
      </div>
      <form className={Style.formadmin}>
      <p>Admin</p><br/><br/>
      <input type="text" id="username" name="username" placeholder="College ID" value={this.state.username} onChange={this.handleChange} required />
      <input type="password" id="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} required />
      <button type="submit" className={Style.button4} onClick={this.handleLogin}>Login</button>
      </form>
      </div>
      </div>

  );
}
}


export default Admin;
