import React from 'react';
import { isLogins, isLogina } from '../utils';
import Style from './css/Reset.module.css';
import Axios from 'axios'

var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
class Reset extends React.Component  {
  constructor(props) {
    super(props);

    this.state = {
      hidden1: true,
      password1: "",
      hidden2: true,
      password2: "",
      hidden3: true,
      password3: "",
      formErrors: {
        oldpassword: "",
        newpassword: "",
        Cpassword: ""
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleShow1 = this.toggleShow1.bind(this);
    // this.handlePasswordChange2 = this.handlePasswordChange2.bind(this);
    this.toggleShow2 = this.toggleShow2.bind(this);
    // this.handlePasswordChange3 = this.handlePasswordChange3.bind(this);
    this.toggleShow3 = this.toggleShow3.bind(this);
  }

  toggleShow1() {
    this.setState({ hidden1: !this.state.hidden1 });
  }
  toggleShow2() {
    this.setState({ hidden2: !this.state.hidden2 });
  }
  toggleShow3() {
    this.setState({ hidden3: !this.state.hidden3 });
  }
 handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    var passval =this.state.password;
    let formErrors = { ...this.state.formErrors };
    switch (name) {
      case "oldpassword":
       this.setState({ password1: e.target.value });
       break;
      case "newpassword":
        formErrors.newpassword = passRegex.test(value) && value.length > 7  && value.length < 16 ? ""
          : "Password should be contain one capital later, one small later, one symbol,one digit and length is at least 8 and at most 15" ;
        this.setState({ password2: e.target.value });
        break;
      case "Cpassword":
        formErrors.Cpassword =
          passval !== value ? "Password did not match   " : "";
          this.setState({ password3: e.target.value });
        break;
      default:
        break;
    }
}
  render() {
const { formErrors } = this.state;
    return (
      <div>
      <div className={Style.dashboardimg}>
      <img src={require("./cet.png")}/>
      <hr/>
      </div>
      <div className={Style.reset}>
       <div>
        <input
          name="oldpassword"
          type={this.state.hidden1 ? "password" : "text"}
          value={this.state.password1} placeholder="Old Password"
          onChange={this.handleChange}
        />
        {this.state.hidden1? <i class="fa fa-circle-o" onClick={this.toggleShow1}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow1}></i>} 
       </div>
       <span>{formErrors.newpassword}</span>
       <div>
        <input
          name="newpassword"
          type={this.state.hidden2 ? "password" : "text"}
          value={this.state.password2} placeholder="New Password"
          onChange={this.handleChange}
        />
        {this.state.hidden2? <i class="fa fa-circle-o" onClick={this.toggleShow2}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow2}></i>}
       </div>
       <span>{formErrors.oldpassword}</span>
       <div>
        <input
          name="Cpassword"
          type={this.state.hidden3 ? "password" : "text"}
          value={this.state.password3} placeholder="Confirm Password"
          onChange={this.handleChange}
        />
        {this.state.hidden3? <i class="fa fa-circle-o" onClick={this.toggleShow3}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow3}></i>}
       </div>
       <span>{formErrors.Cpassword}</span>
      </div>
      </div>
    );
  }
}


export default Reset;
