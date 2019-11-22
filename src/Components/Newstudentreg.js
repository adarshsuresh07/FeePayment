import React, { Component } from "react";
//import {Link } from "react-router-dom";
import "./css/Newstudentreg.css";

const fullNameRegx = RegExp("^[A-Za-z]");
// const emailRegex = RegExp(
//     /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );
// var passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const admNumRegx = RegExp("[0-9]");

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
            department: null,
            sem: null,
            scholorship: null,

            formErrors: {
                admNum: "",
                fullName: "",
                dob: "",
                program: "",
                department: "",
                sem: "",
                scholorship: ""
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
            //   Axios.post('http://localhost:3001/users/login',{
            //     username: this.state.username,
            //     password: this.state.password,
            //     role: 'admin'
            //   })
            //   .then(res => {
            //     if(res.data.success) {
            //     logina(res.data.token);
            //       this.props.history.push('/Adminhome');
            //     } 
            //   });
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
                    (admNumRegx.test(value) && value.length ==6) ? "" : "Please enter a valid Admission number";
                break;
            case "fullName":
                formErrors.fullName = ( fullNameRegx.test(value)  && value.length < 31 && value.length > 4) ? "" : "Maximum 30 alphabets an minimum 5 alphabets";
                break;
            case "dob":
                formErrors.dob = value.length == 0 ? "Date of birth required" : "";
                break;
            case "program":
                formErrors.program =
                    value.length == 0 ? "Error" : "";
                break;
            case "department":
                formErrors.department =
                    value.length == 0 ? "Error" : "";
                break;
            case "sem":
                formErrors.sem =
                    value.length == 0 ? "Error" : "";
                break;
            case "scholorship":
                formErrors.scholorship =
                    value.length == 0 ? "Error" : "";
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
                                <option value="" hidden>Program</option>
                                <option value="UG">UG</option>
                                <option value="PG">PG</option>



                            </select>

                            {/* <i  
              className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i> */}
                            {formErrors.program.length > 0 && (
                                <span className="errorMessage">{formErrors.program}</span>
                            )}
                        </div>
                        {this.state.program == "UG" ? (
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
                                        <option value="" hidden>Department</option>
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
                                        required
                                    >

                                        <option value="" hidden>Semester</option>
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
                                            <option value="" hidden>Department</option>
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

                                            <option value="" hidden>Semester</option>
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


                            )}
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
                                <option value="" hidden >Scholorship</option>
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



                        <div className="register">
                            <button type="submit">Register</button>
                        </div>
                        <div >

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Newstudentreg;
