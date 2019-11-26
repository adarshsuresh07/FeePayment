import React from 'react';
import { logouta, getTokena } from '../utils';
import Style from './css/Adminhome.module.css';
import Axios from 'axios'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
class Adminhome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.addStudent = this.addStudent.bind(this);
    this.submit = this.submit.bind(this);
    this.reset = this.reset.bind(this);
    this.resetstudent = this.resetstudent.bind(this);
    this.state = {
      cId: '',
      name: '',
      admno: '',
      programme: '',
      sem: '',
      dept: '',
      paidornot: '',
      scholname: '',
      students: []
    };
  };

  componentDidMount() {
    let config = {
      headers: {
        Authorization: 'bearer ' + getTokena()
      }
    };
    Axios.get('http://localhost:3001/admin', config)
      .then((res) => {
        this.setState({
          cId: res.data.username,
          name: res.data.name
        });
      });
  };
  renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }
  renderTableData() {
    return this.state.students.map((student, index) => {
      const { admno, name, prog, sem, schol, deadline, dept, paid, fine } = student //destructuring
      return (
        <tr key={admno}>
          <td>{admno}</td>
          <td>{name}</td>
          <td>{prog}</td>
          <td>{sem}</td>
          <td>{schol}</td>
          <td>{deadline}</td>
          <td>{dept}</td>
          <td>{paid === "No" ? <button id={admno} className={Style.pay} onClick={this.submit} >Pay</button> :
            <button className={Style.pay} disabled>Pay</button>}</td>
          <td>{fine}</td>
          <td><button id={admno} className={Style.reset} onClick={this.resetstudent}>Reset</button></td>
        </tr>
      )
    })
  }

  handleLogout() {
    logouta();
    this.props.history.push('/');
  };
  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  };
  submitSearch() {
    let data = {};
    if (this.state.admno !== "")
      data = { ...data, ...{ admno: this.state.admno } };
    if (this.state.programme !== "")
      data = { ...data, ...{ programme: this.state.programme } };
    if (this.state.sem !== "")
      data = { ...data, ...{ sem: this.state.sem } };
    if (this.state.dept !== "")
      data = { ...data, ...{ dept: this.state.dept } };
    if (this.state.paidornot !== "")
      data = { ...data, ...{ paidornot: this.state.paidornot } };
    if (this.state.scholname !== "")
      data = { ...data, ...{ scholname: this.state.scholname } };
    let config = {
      headers: {
        Authorization: 'bearer ' + getTokena()
      },
      params: data
    };
    Axios.get('http://localhost:3001/admin/search', config)
      .then((res) => {
        this.setState({
          students: res.data,
          isValid: 1
        });
      })
      .catch((err) => {
        this.setState({
          students: [],
          isValid: 0
        });
      });
  };

  addStudent() {
    this.props.history.push('/Newstudentreg');
  };

  resetstudent({target}) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            let config = {
              headers: {
                Authorization: 'bearer ' + getTokena()
              }
            };
            Axios.post('http://localhost:3001/admin/resetStudentPassword', {admno: target.id}, config)
            .then(res => {console.log('Success');this.submitSearch();})
            .catch(err => console.log('RED'));
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };
  submit({target}) {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            let config = {
              headers: {
                Authorization: 'bearer ' + getTokena()
              }
            };
            Axios.post('http://localhost:3001/admin/markPaid', { admno: target.id }, config)
              .then(res => { console.log('Success'); this.submitSearch(); })
              .catch(err => console.log(err));
          }
        },
        {
          label: 'No',
        }
      ]
    });
  };

  reset() {
    this.props.history.push('/Reset');
  }



  render() {
    return (
      <div className={Style.home}>
        <div className={Style.header}>
          <img src={require("./cet.png")} alt="College of Engineering Trivandrum" />
        </div>

        <div className={Style.row}>
          <div className={Style.leftcolumn}>
            <div className={Style.card}>
              <input name="admno" type="text" placeholder="Search.." value={this.state.admno} onChange={this.handleChange} />
              <p>Filters:</p>
              <select name="programme" value={this.state.programme} onChange={this.handleChange}>
                <option value="">Programme</option> <option value="UG">UG</option>
                <option value="PG">PG</option>
              </select>
              {this.state.programme === "UG" ?
                <span className={Style.sem}>
                  <select name="sem" onChange={this.handleChange}>
                    <option value="">Sem</option>
                    <option value="S1">S1</option> <option value="S2">S2</option>
                    <option value="S3">S3</option> <option value="S4">S4</option>
                    <option value="S5">S5</option> <option value="S6">S6</option>
                    <option value="S7">S7</option> <option value="S8">S8</option>
                  </select>
                  <select name="dept" onChange={this.handleChange}>
                    <option value="">Department</option>
                    <option value="ME">Mech</option> <option value="CE">Civil</option>
                    <option value="EC">EC</option> <option value="AE">AE</option>
                    <option value="IE">Industrial</option> <option value="CS">CS</option>
                    <option value="EE">Electrical</option> <option value="AR">Archie</option>
                  </select> </span>
                : this.state.programme === "PG" ?
                  <span className={Style.sem}>
                    <select name="sem" onChange={this.handleChange}>
                      <option value="">Sem</option>
                      <option value="S1">S1</option> <option value="S2">S2</option>
                      <option value="S3">S3</option> <option value="S4">S4</option>
                    </select>
                    <select name="dept" onChange={this.handleChange}>
                      <option value="">Department</option>
                      <option value="ME">Mech</option> <option value="CE">Civil</option>
                      <option value="EC">EC</option> <option value="CS">CS</option>
                      <option value="EE">EEE</option> <option value="MCA">MCA</option>
                      <option value="MBA">MBA</option>
                    </select> </span> : <span />
              }
              <select name="paidornot" onChange={this.handleChange}>
                <option value="">Paid/Not</option> <option value="1">Paid</option>
                <option value="0">Not Paid</option>
              </select>
              <select name="scholname" onChange={this.handleChange}>
                <option value="">Scholarship</option>  <option value="None">None</option>
                <option value="E-Grantz">E-Grantz</option> <option value="Merit">Merit</option>
              </select>
              <button type="submit" class={Style.searchButton} onClick={this.submitSearch}>
                <i class="fa fa-search"></i>
              </button>
            </div>
            <div className={Style.cardtable}>
              {this.state.isValid ?
                <div>
                  <h1 id='title'>Student Details</h1>
                  <table id='students'>
                    <tbody>
                      <tr>{this.renderTableHeader()}</tr>
                      {this.renderTableData()}
                    </tbody>
                  </table>
                </div>
                : <img src={require("./search.png")} alt="Search for Results" />}
            </div>
          </div>
          <div className={Style.rightcolumn}>
            <div className={Style.card1}>
              <p> {this.state.cId}</p>
              <p>{this.state.name} </p>
            </div>
            <div className={Style.card1}>
              <button className={Style.buttonadmin} onClick={this.handleLogout}> Logout </button><br />
              <button className={Style.buttonadmin} onClick={this.reset}> Reset Password </button><br />
              <button className={Style.buttonadmin} onClick={this.addStudent}> Add Student </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Adminhome;