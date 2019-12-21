import React from 'react';
import { logouts, getTokens } from '../utils';
import Style from './css/Studenthome.module.css';
import Confirm from './Confirmation'
import Axios from 'axios';
class Studenthome extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.cancel = this.cancel.bind(this);
    this.reset = this.reset.bind(this);
    this.pay = this.pay.bind(this);
    this.state = {
      admno: '',
      name: '',
      programme: '',
      sem: '',
      dept: '',
      schol: '',
      deadline: '',
      paid: '',
      fine: '',
      toggle: false
    };
  };
  componentDidMount() {
    let config = {
      headers: {
        Authorization: 'bearer ' + getTokens()
      },
    };
    Axios.get('http://localhost:3001/dashboard/', config)
      .then((res) => {
        this.setState({
          admno: res.data.admno,
          name: res.data.name,
          programme: res.data.prog,
          sem: res.data.sem,
          dept: res.data.dept,
          schol: res.data.schol,
          deadline: res.data.deadline,
          paid: res.data.paid,
          fine: res.data.fine
        });
      });
  }
  handleLogout() {
    logouts();
    this.props.history.push('/');
  }
  pay() {
    // this.props.history.push('/Confirmation');
    this.setState({ toggle: true });
  }
  cancel(value) {
    this.setState({ toggle: false });
  }
  reset() {
    this.props.history.push('/Reset');
  }
  render() {
    return (
      this.state.toggle ? <Confirm {...this.props} mutateState={this.cancel} /> :
        <div className={Style.home}>
          <div className={Style.header}>
            <img src={require("./cet.png")} alt="College of Engineering Trivandrum" />
          </div>
          <div className={Style.row}>
            <div className={Style.leftcolumn}>
              <div className={Style.card1}>
                <div className={Style.details}>
                  <p>Fee Details</p>
                  <span id='schol'>Scholarship Details: {this.state.schol}</span>
                  <span id='deadline'>Fee Deadline: {this.state.deadline}</span>
                  <span id='paid'>Paid : {this.state.paid}</span>
                  {this.state.paid === 'No' ?
                    <div>
                      <div className={Style.pay}>
                        <span title="Base fine:Rs.10 It will be double after next two days and so on" className={Style.fine}>?</span>
                        <span id='fine'>Fine imposed: {this.state.fine}</span></div>
                      <button className={Style.paybutton} type="Submit" onClick={this.pay}> Pay </button>
                    </div> : <span />}
                </div>
              </div>
            </div>
            <div className={Style.rightcolumn}>
              <div className={Style.card1}>
                <div className={Style.details}>
                  <p id='admno'>{this.state.admno}</p>
                  <span id='name'>{this.state.name}</span>
                  <span id='programme'>{this.state.programme}</span>
                  <span id='sem'>{this.state.sem}</span>
                  <span id='dept'>{this.state.dept}</span>
                </div>
              </div>
              <div className={Style.card1}>
                <button onClick={this.handleLogout}> Logout </button>
                <button onClick={this.reset}> Reset Password </button>
              </div>
            </div>
          </div>
        </div>

    );
  }
}
export default Studenthome;