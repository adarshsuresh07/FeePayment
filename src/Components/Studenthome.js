import React from 'react';
import { logouts, getTokens } from '../utils';
import Style from './css/Studenthome.module.css';
import Axios from 'axios';
class Studenthome extends React.Component  {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
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
      fine: ''
    };
  };
  componentDidMount() { 
    let config = {
      headers: {
        Authorization: 'bearer '+getTokens()
      },
    };
    Axios.get('http://localhost:3001/dashboard/',config)
    .then((res) => {
      console.log(res);
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
    handleLogout(){
      logouts();
      this.props.history.push('/');
    }
     pay(){
      this.props.history.push('/Confirmation');
    }
    reset(){
      this.props.history.push('/Reset');
    }
render(){
 return (
  <div>
    
  <div className={Style.dashboardimg}>
  <img src={require("./cet.png")}/>
  <div className={Style.topRight}>
  <button className={Style.button3} onClick={this.handleLogout}> Logout </button>
  <button className={Style.button3} onClick={this.reset}> Reset Password </button>
  </div>
  </div>
  <hr/>
  <div className={Style.dashboard}>
  <div className={Style.details}>
    <span id='admno'>{this.state.admno}</span> 
    <span id='name'>{this.state.name}</span> 
    <span id='programme'>{this.state.programme}</span>
    <span id='sem'>{this.state.sem}</span>
    <span id='dept'>{this.state.dept}</span>
   </div>
   <div className={Style.details}> 
    <span id='schol'>Scholarship Details: {this.state.schol}</span>
    <span id='deadline'>Fee Deadline: {this.state.deadline}</span>
    <span id='paid'>Paid : {this.state.paid}</span>
    {this.state.paid == 'No' ?
    <div>
      <span className={Style.finedetails} title="Base fine:Rs.10 It will be double after next two days and so on">?</span>
      <span id='fine'>Fine imposed: {this.state.fine}</span><br/>
      <button className={Style.button1} type="Submit" onClick={this.pay}> Pay </button>
    </div> : <span/>}
  </div>
  </div>
</div>

  );
 }
}
export default Studenthome;