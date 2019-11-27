import React, { Component } from 'react';
import { isLogins, isLogina, getTokena, getTokens } from '../utils';
import './css/Reset.css';
import { confirmAlert } from 'react-confirm-alert';
import Axios from 'axios'





var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Reset extends Component {
  constructor(props) {
    super(props);

    this.state = {
      oldpass: null,
      newpass: null,
      confirmpass: null,
      hidden1: true,
      hidden2: true,
      hidden3: true,


      formErrors: {
        oldpass: "",
        newpass: "",
        confirmpass: ""
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShow1 = this.toggleShow1.bind(this);
    // this.handlePasswordChange2 = this.handlePas  swordChange2.bind(this);
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

  handleSubmit = e => {
    e.preventDefault();
    if (formValid(this.state)) {

      console.log(`
      --SUBMITTING--
      
      User Name: ${this.state.oldpass}
      newpass: ${this.state.newpass}
    
      Confirm Password: ${this.state.confirmpass}
    `);
      let config;
      if (isLogina()) {
        config = {
          headers: {
            Authorization: 'bearer ' + getTokena()
          },
        };
      }
      else if (isLogins()) {
        config = {
          headers: {
            Authorization: 'bearer ' + getTokens()
          },
        };
      }
      Axios.post('http://localhost:3001/users/resetPassword', {
        curPassword: this.state.oldpass,
        newPassword: this.state.newpass
      }, config)
        .then(res => {
          confirmAlert({
            title: 'Password Reset Successfully',
            buttons: [
              {
                label: 'Continue',
                onClick: () => {
                  this.props.history.push('/');
                }
              }
            ]
          });
        })
        .catch(err => console.log('Invalid Password'));

    }
    else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }

  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    var passval = this.state.newpass;
    switch (name) {

      // case "oldpass":
      //   formErrors.oldpass =
      //   passRegex.test(value) ? "" : "Minimum 5 characaters and maximum 20 required";
      //   break;
      case "newpass":
        formErrors.newpass = passRegex.test(value) && value.length > 7 && value.length < 16 ? ""
          : "Password should be contain one capital later, one small later, one symbol,one digit and length is at least 8 and at most 15";
        break;
      case "confirmpass":
        formErrors.confirmpass =
          passval !== value ? "Password did not match   " : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;

    return (
      <div className={"wrappe"} >
        <div className="headerim">
          <img src={require("./cet.png")} alt="College of Engineering Trivandrum" />
        </div>
        <div className="form-wrappe">
          <h1>Password Reset</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="oldpass">

              <input
                className={formErrors.oldpass.length > 0 ? "error" : "noerror"}
                placeholder="Old Pasword"
                type={this.state.hidden1 ? "password" : "text"} name="oldpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden1 ? <i class="fa fa-circle-o" onClick={this.toggleShow1}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow1}></i>}
              {/* <button classname="eye" onclick={this.showhide} ref="eye">
              <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
              </button > */}
              {/* <i  
              className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}

              {formErrors.oldpass.length > 0 && (
                <div className="errorMessage">{formErrors.oldpass}</div>
              )}
            </div>
            <div className="newpass">
              <input
                className={formErrors.newpass.length > 0 ? "error" : null}
                placeholder="New password"
                type={this.state.hidden2 ? "password" : "text"} name="newpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden2 ? <i class="fa fa-circle-o" onClick={this.toggleShow2}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow2}></i>}
              {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}

              {/* <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.newpass.length > 0 && (
                <span className="errorMessage">{formErrors.newpass}</span>
              )}
            </div>
            <div className="confirmpass">
              <input
                className={formErrors.confirmpass.length > 0 ? "error" : null}
                placeholder="Confirm Password"
                type={this.state.hidden3 ? "password" : "text"} name="confirmpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden3 ? <i class="fa fa-circle-o" onClick={this.toggleShow3}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow3}></i>}
              {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
              {/* <div icon>
              <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
              </div> */}
              {formErrors.confirmpass.length > 0 && (
                <span className="errorMessage">{formErrors.confirmpass}</span>
              )}
            </div>
            <div className="reset">
              <button type="submit" onClick={this.handleSubmit}>Reset</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reset;