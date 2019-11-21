import React, { Component } from "react";
//import {Link } from "react-router-dom";
 import "./css/Newstudentreg.css";

const userNameRegex = RegExp("^[A-Za-z0-9_-]{5,20}$");
const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);
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

class Newstudentreg extends Component {
  constructor(props) {
    super(props);

    this.state = {
      admNum: null,
      fullName: null,
      dob: null,
      program: null,
      department:null,
      sem:null,
      scholorship:null,

      formErrors: {
        admNum: "",
      fullName: "",
      dob: "",
      program:"",
      department:"",
      sem:"",
      scholorship:""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();
   

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
       
        Admission Number: ${this.state.admNum}
        fullName: ${this.state.fullName}
        dob: ${this.state.dob}
        program: ${this.state.program}
        Department:${this.state.department}
        Semester:${this.state.sem}
        Scholorship: ${this.state.scholorship}

      `);
    //   fetch('http://localhost:3000/user/signup', {
    //     method: 'POST',
    //     headers : new Headers(),
    //     body:JSON.stringify({admNum:this.state.admNum, fullName:this.state.fullName, dob:this.state.dob})
    // }).then((res) => res.json())
    // .then((data) =>  console.log(data))
    // .catch((err)=>console.log(err))
 } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    // var passval =this.state.dob;
    switch (name) {
      case "admNum":
        formErrors.admNum =
        userNameRegex.test(value) ? "" : "Must have 6 digits";
        break;
      case "fullName":
        formErrors.fullName = value.length >20 ? "maximum 20 alphabets" : "";
        break;
      case "dob":
        // formErrors.dob = passRegex.test(value) && value.length > 7  && value.length < 16 ? ""
        //   : "dob should be contain one capital later, one small later, one symbol,one digit and length is at least 8 and at most 15" ;
        // break;
      case "program":
        formErrors.program =
          value.length !=2 ? "Error" : "";
        break;
        case "department" :
            formErrors.department =
            value.length !=3 ? "" : "Error";
            break;
      case "sem":
          formErrors.sem =
          value.length !=2 ? "Error" : "";
          break;
        case "scholorship" :
            formErrors.scholorship =
            value.length >0 ? "": "Error";
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
          <h1>New Student Registration</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="admNum">
              <input
                className={formErrors.admNum.length > 0 ? "error" : null}
                placeholder="Admission Number"
                type="text"
                name="admNum"
                noValidate
                onChange={this.handleChange}
              />
              {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.admNum.length > 0 && (
                <span className="errorMessage">{formErrors.admNum}</span>
              )}
            </div>
            <div className="fullName">
              <input
                className={formErrors.fullName.length > 0 ? "error" : null}
                placeholder="Full Name"
                type="text"
                name="fullName"
                noValidate
                onChange={this.handleChange}
              />
              {/* <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.fullName.length > 0 && (
                <span className="errorMessage">{formErrors.fullName}</span>
              )}
            </div>
            <div className="dob">
              <input
                className={formErrors.dob.length > 0 ? "error" : null}
                placeholder="Date of Birth"
                type="date"
                name="dob"
                noValidate
                onChange={this.handleChange}
              />
              {/* <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.dob.length > 0 && (
                <span className="errorMessage">{formErrors.dob}</span>
              )}
            </div>

            <div className="program">
              {/* <label htmlFor="userName">User Name</label> */}
              <select
                className={formErrors.program.length > 0 ? "error" : null}
                placeholder="Program"
                type="text"
                name="program"
                noValidate
                onChange={this.handleChange}
              
                
              >
                <option value="program">Program</option>
                <option value="UG">UG</option>
                <option value="PG">PG</option>
                


              </select>

              {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.program.length > 0 && (
                <span className="errorMessage">{formErrors.program}</span>
              )}
            </div>
            {this.state.program=="UG"?(
                <div className="depsem">
            <div className="department">
              {/* <label htmlFor="userName">User Name</label> */}
              <select
                className={formErrors.department.length > 0 ? "error" : null}
                placeholder="Department"
                type="text"
                name="department"
                noValidate
                onChange={this.handleChange}
              
                
              >
                <option value="Department">Department</option>
                <option value="A">a</option>
                <option value="B">b</option>
                <option value="C">c</option>
                <option value="D">d</option>
                <option value="E">e</option>
                


              </select>

              {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.department.length > 0 && (
                <span className="errorMessage">{formErrors.department}</span>
              )}
            </div>
            <div className="sem">
            <select
              className={formErrors.sem.length > 0 ? "error" : null}
              placeholder="Semester"
              type="text"
              name="sem"
              noValidate
              onChange={this.handleChange}
            >

                <option value="Semester">Semester</option>
                <option value="A">a</option>
                <option value="B">b</option>
                <option value="C">c</option>
                <option value="D">d</option>
                <option value="E">e</option>
            {/* <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}
            {formErrors.sem.length > 0 && (
              <span className="errorMessage">{formErrors.sem}</span>
            )}


            </select>
            </div>
            </div>
            
            
            ) : (
                <div className="depsem">
            <div className="department">
              {/* <label htmlFor="userName">User Name</label> */}
              <select
                className={formErrors.department.length > 0 ? "error" : null}
                placeholder="Department"
                type="text"
                name="department"
                noValidate
                onChange={this.handleChange}
              
                
              >
                <option value="Department">Department</option>
                <option value="F">f</option>
                <option value="G">g</option>
                <option value="H">h</option>
                <option value="I">i</option>
                <option value="J">j</option>
                


              </select>

              {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.department.length > 0 && (
                <span className="errorMessage">{formErrors.department}</span>
              )}
            </div>
            <div className="sem">
            <select
              className={formErrors.sem.length > 0 ? "error" : null}
              placeholder="Semester"
              type="text"
              name="sem"
              noValidate
              onChange={this.handleChange}
            >

                <option value="Semester">Semester</option>
                <option value="F">f</option>
                <option value="G">g</option>
                <option value="H">h</option>
                <option value="I">i</option>
                <option value="J">j</option>
            {/* <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i> */}
            {formErrors.sem.length > 0 && (
              <span className="errorMessage">{formErrors.sem}</span>
            )}


            </select>
          </div>
          </div>
            
            
            ) }
            <div className="scholorship">
              {/* <label htmlFor="userName">User Name</label> */}
              <select
                className={formErrors.scholorship.length > 0 ? "error" : null}
                placeholder="Sholorship"
                type="text"
                name="scholorship"
                noValidate
                onChange={this.handleChange}
              
                
              >
                <option value="Scholorship">Scholorship</option>
                <option value="s1">s1</option>
                <option value="s2">s2</option>
                <option value="s3">s3</option>
                <option value="s4">s4</option>
                <option value="s5">s5</option>
                


              </select>

              {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
              {formErrors.scholorship.length > 0 && (
                <span className="errorMessage">{formErrors.scholorship}</span>
              )}
            </div>



            <div className="signup">
              <button type="submit">SIGN UP</button> 
            </div>
            <div >
            <p>By clicking on Sign Up , you agree to the Privacy Policy and Terms and condtions </p>
              <hr className="line"/>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Newstudentreg;
// import React, { Component } from "react";
// import "./css/Newstudentreg.css";
// //const userNameRegex = RegExp("^[A-Za-z0-9_-]{5,20}$");

// // const emailRegex = RegExp(
// //   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// // );
// //var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

// var mobRegex = new RegExp(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/);
// const formValid = ({ formErrors, ...rest }) => {
//   let valid = true;
//   // validate form errors being empty
//   Object.values(formErrors).forEach(val => {
//     val.length > 0 && (valid = false);
//   });

//   // validate the form was filled out
//   Object.values(rest).forEach(val => {
//     val === null && (valid = false);
//   });

//   return valid;
// };

// class Newstudentreg extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//      firstName: null,
//       lastName: null,
//       mobileNumber: null,
//       // fullName: null,
//       // dob: null,
//       // sem: null,
//       userType: null,
//       coaNumber: null,
//       currentLocation: null,
//       yearPassingout: null,
//       university: null,
//       course: null,
//       data : [],
  
      
      
      

//       formErrors: {
//        firstName: "",
//       lastName: "",
//         mobileNumber: "",
//         //fullName: "",
//        // dob: "",
//         //sem: "",
//         userType: "",
//         coaNumber: "",
//         currentLocation: "",
//         yearPassingout: "",
//         university: "",
//         course: ""
//       }
      
//     };

  
// }



//   handleSubmit = e => {
//     e.preventDefault();
   

//     if (formValid(this.state)) {
//       console.log(`
//         --SUBMITTING--
//         First Name: ${this.state.firstName}
//         User Name: ${this.state.admNum}
//         Mobile Number ${this.state.mobileNumber}
        
        
//       `);
//     } else {
//       console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
//     }
//   };

//   handleChange = e => {
//     e.preventDefault();
//     const { name, value } = e.target;
//     let formErrors = { ...this.state.formErrors };
//     // var passval =this.state.dob;
//     switch (name) {
//       case "firstName":
//         formErrors.firstName =
//           value.length >20 ? "maximum 20 alphabets" : "";
//         break;
//       case "lastName":
//         formErrors.lastName =
//         value.length<19 ? "" : "maximum 20 alphabets";
//         break;
//       case "mobileNumber":
//         formErrors.mobileNumber = mobRegex.test(value)
//           ? "" : "Enter a valid mobile number with country code";
//         break;
//       // case "userType":
//       //   value.length > 0 ? "": "Please fill this section";
//       //   break;
//       case "currentLocation":
//         formErrors.currentLocation =
//            value.length >30 ? "maximum 30 alphabets" : "";
//         break;

//         case "coaNumber":
//           formErrors.coaNumber =
//              value.length >30 ? "maximum 30 alphabets" : "";
//           break;

//           case "yearPassingout":
//             formErrors.yearPassingout =
//                value.length >30 ? "maximum 30 alphabets" : "";
//             break;
//             case "university":
//               formErrors.university =
//                  value.length >30 ? "maximum 30 alphabets" : "";
//               break;
//               case "course":
//                 formErrors.course =
//                    value.length >30 ? "maximum 30 alphabets" : "";
//                 break;     
//       default:
//         break;
//     }

//     this.setState({ formErrors, [name]: value }, () => console.log(this.state));
//   };

//   render() {

//     console.log(this.state.data);
//     const { formErrors } = this.state;

//     return (
//       <div className="wrapper">
//         <div className="form-wrapper">
//           <h1>Create Profile</h1>
//           <form onSubmit={this.handleSubmit} noValidate>
//           <div className="userId">
//               <label htmlFor="userId">User Id</label>
//               <input
//                 //className={formErrors.admNum.length > 0 ? "error" : null}
//                // placeholder="User Name"
//                 type="text"
//                 name="userId"
//                 value="3"
//                 noValidate
//                 readOnly
//                 //onChange={this.handleChange}
//               />
//               {/* <i  
//               className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
//               {formErrors.user.length > 0 && (
//                 <span className="errorMessage">{formErrors.admNum}</span>
//               )} */}
//             </div>
//             <div className="firstName">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.firstName.length > 0 ? "error" : null}
//                 placeholder="First Name"
//                 type="text"
//                 name="firstName"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.firstName.length > 0 && (
//                 <span className="errorMessage">{formErrors.firstName}</span>
//               )}
//             </div>
//             <div className="lastName">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.lastName.length > 0 ? "error" : null}
//                 placeholder="Last Name"
//                 type="text"
//                 name="lastName"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.lastName.length > 0 && (
//                 <span className="errorMessage">{formErrors.lastName}</span>
//               )}
//             </div>
//             <div className="userType">
//               {/* <label htmlFor="admNum">User Name</label> */}
//               <select
//                 className={formErrors.userType.length > 0 ? "error" : null}
//                 placeholder="Select User"
//                 type="text"
//                 name="userType"
//                 noValidate
//                 onChange={this.handleChange}
              
                
//               >
//                 <option value="SA">---Select Usertype</option>
//                 <option value="SA">Student Architect</option>
//                 <option value="PA">Proffessional Architect</option>
//                 <option value="SD">Student Designer</option>
//                 <option value="AD">Architectural Designer</option>


//               </select>

//               <i  
//               className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
//               {formErrors.userType.length > 0 && (
//                 <span className="errorMessage">{formErrors.userType}</span>
//               )}
//             </div>
//             <div className="mobileNumber">
//               {/* <label htmlFor="mobileNumber">Mobile Number</label> */}
//               <input
//                 className={formErrors.mobileNumber.length > 0 ? "error" : null}
//                 placeholder="Mobile Number"
//                 type="text"
//                 name="mobileNumber"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.mobileNumber.length > 0 && (
//                 <span className="errorMessage">{formErrors.mobileNumber}</span>
//               )}
//               </div>

//               <div className="currentLocation">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.currentLocation.length > 0 ? "error" : null}
//                 placeholder="Current Location"
//                 type="text"
//                 name="currentLocation"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.currentLocation.length > 0 && (
//                 <span className="errorMessage">{formErrors.currentLocation}</span>
//               )}
//             </div>
//              {this.state.userType==="SA" || this.state.userType==="PA" || this.state.userType==="AF"?(<div className="coaNumber">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.coaNumber.length > 0 ? "error" : null}
//                 placeholder="Coa Number"
//                 type="text"
//                 name="coaNumber"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.coaNumber.length > 0 && (
//                 <span className="errorMessage">{formErrors.coaNumber}</span>
//               )}
//             </div>) : null}




//             {this.state.userType==="SA" || this.state.userType==="SD"?(
//               <div className="college">
//               <div className="yearPassingout">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.yearPassingout.length > 0 ? "error" : null}
//                 placeholder="Expected year of Passing out"
//                 type="text"
//                 name="yearPassingout"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.yearPassingout.length > 0 && (
//                 <span className="errorMessage">{formErrors.yearPassingout}</span>
//               )}
//             </div>



//              <div className="university">
//               {/* <label htmlFor="firstName">First Name</label> */}
//               <input
//                 className={formErrors.university.length > 0 ? "error" : null}
//                 placeholder="University"
//                 type="text"
//                 name="university"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.university.length > 0 && (
//                 <span className="errorMessage">{formErrors.university}</span>
//               )}
//             </div>
            
            

            
            
          
//               <div className="course">
//                {/* <label htmlFor="firstName">First Name</label> */}
//                <input
//                 className={formErrors.course.length > 0 ? "error" : null}
//                 placeholder="Course"
//                 type="text"
//                 name="course"
//                 noValidate
//                 onChange={this.handleChange}
//               />
//               {formErrors.course.length > 0 && (
//                 <span className="errorMessage">{formErrors.course}</span>
//               )}
//             </div>
//             </div>

            
            
//             )
            
            
//             : null}



           
//             <div className="createProfile">
//               <button type="submit">Create Profile</button>
//               {/* <small>By clicking on Sign Up , you agree to the </small> */}
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default Newstudentreg;

