import React,{ Component} from 'react';
import { isLogins, isLogina } from '../utils';
import Style from './css/Reset.module.css';
import Axios from 'axios'





var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

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

    this.handleSubmit =this.handleSubmit.bind(this);
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

      
  }
  else {
    console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
  }
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    var passval =this.state.newpass;
    switch (name) {
     
      // case "oldpass":
      //   formErrors.oldpass =
      //   passRegex.test(value) ? "" : "Minimum 5 characaters and maximum 20 required";
      //   break;
      case "newpass":
        formErrors.newpass = passRegex.test(value) && value.length > 7  && value.length < 16 ? ""
          : "Password should be contain one capital later, one small later, one symbol,one digit and length is at least 8 and at most 15" ;
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
      <div className="wrapper" >
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="oldpass">
              <input
                className={formErrors.oldpass.length > 0 ? "error" : "noerror"}
                placeholder="Old Pasword"
                type={this.state.hidden1 ? "password" : "text"}                name="oldpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden1? <i class="fa fa-circle-o" onClick={this.toggleShow1}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow1}></i>}
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
                type={this.state.hidden2 ? "password" : "text"}                name="newpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden2? <i class="fa fa-circle-o" onClick={this.toggleShow2}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow2}></i>}
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
                type={this.state.hidden3 ? "password" : "text"}                name="confirmpass"
                noValidate
                onChange={this.handleChange}
              />
              {this.state.hidden3? <i class="fa fa-circle-o" onClick={this.toggleShow3}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow3}></i>}
              {/* <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span> */}
              {/* <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.confirmpass.length > 0 && (
                <span className="errorMessage">{formErrors.confirmpass}</span>
              )}
            </div>
            <div className="reset">
              <button type="submit">Reset</button> 
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Reset;
































// var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
// class Reset extends React.Component  {
//   constructor(props) {
//     super(props);

//     this.state = {
//       hidden1: true,
//       password1: "",
//       hidden2: true,
//       password2: "",
//       hidden3: true,
//       password3: "",
//       formErrors: {
//         oldpassword: "",
//         newpassword: "",
//         confirmpass: ""
//       }
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.toggleShow1 = this.toggleShow1.bind(this);
//     // this.handlePasswordChange2 = this.handlePasswordChange2.bind(this);
//     this.toggleShow2 = this.toggleShow2.bind(this);
//     // this.handlePasswordChange3 = this.handlePasswordChange3.bind(this);
//     this.toggleShow3 = this.toggleShow3.bind(this);
//   }

//   toggleShow1() {
//     this.setState({ hidden1: !this.state.hidden1 });
//   }
//   toggleShow2() {
//     this.setState({ hidden2: !this.state.hidden2 });
//   }
//   toggleShow3() {
//     this.setState({ hidden3: !this.state.hidden3 });
//   }
//  handleChange = (e) => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     var passval =this.state.password2;
//     let formErrors = { ...this.state.formErrors };
//     switch (name) {
//       case "oldpassword":
//        this.setState({ password1: e.target.value });
//        break;
//       case "newpassword":
//         formErrors.newpassword = passRegex.test(value) && value.length > 7  && value.length < 16 ? ""
//           : "Password should be contain one capital later, one small later, one symbol,one digit and length is at least 8 and at most 15" ;
//         this.setState({ password2: e.target.value });
//         break;
//       case "confirmpass":
//         formErrors.confirmpass =
//           passval !== value ? "Password did not match   " : "";
//           this.setState({ password3: e.target.value });
//         break;
//       default:
//         break;
//     }
// }
//   render() {
// const { formErrors } = this.state;
//     return (
//       <div>
//       <div className={Style.dashboardimg}>
//       <img src={require("./cet.png")}/>
//       <hr/>
//       </div>
//       <div className={Style.reset}>
//        <div>
//         <input
//           name="oldpassword"
//           type={this.state.hidden1 ? "password" : "text"}
//           value={this.state.password1} placeholder="Old Password"
//           onChange={this.handleChange}
//         />
//         {this.state.hidden1? <i class="fa fa-circle-o" onClick={this.toggleShow1}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow1}></i>} 
//        </div>
//        <span>{formErrors.newpassword}</span>
//        <div>
//         <input
//           name="newpassword"
//           type={this.state.hidden2 ? "password" : "text"}
//           value={this.state.password2} placeholder="New Password"
//           onChange={this.handleChange}
//         />
//         {this.state.hidden2? <i class="fa fa-circle-o" onClick={this.toggleShow2}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow2}></i>}
//        </div>
//        <span>{formErrors.oldpassword}</span>
//        <div>
//         <input
//           name="confirmpass"
//           type={this.state.hidden3 ? "password" : "text"}
//           value={this.state.password3} placeholder="Confirm Password"
//           onChange={this.handleChange}
//         />
//         {this.state.hidden3? <i class="fa fa-circle-o" onClick={this.toggleShow3}></i> : <i class="fa fa-dot-circle-o" onClick={this.toggleShow3}></i>}
//        </div>
//        <span>{formErrors.confirmpass}</span>
//       </div>
//       </div>
//     );
//   }
// }


// export default Reset;
