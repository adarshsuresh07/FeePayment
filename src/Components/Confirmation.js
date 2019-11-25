import React from 'react';
import Style from './css/Confirmation.module.css';
import { isLogins, getTokens } from '../utils';
import Axios from 'axios';
import Stripebtn from './Stripebtn';
class Confirm extends React.Component {
  constructor(props){
    super(props);
    this.cancel = this.cancel.bind(this);
    this.state = {
      admno: '',
      name: '',
      sem: '',
      dept: '',
      scholname: '',
      deadline: '',
      fine: '',
      fee: '',
      totalFee: '',
      dayslate: ''
    };
  }
  componentWillMount = () => {
    let config = {
      headers: {
        Authorization: 'bearer '+getTokens()
      }
    };
    Axios.get('http://localhost:3001/dashboard/confirmation',config)
    .then((res) => {
      this.setState({
        admno: res.data.admno,
        name: res.data.name,
        sem: res.data.sem,
        dept: res.data.dept,
        scholname: res.data.scholname,
        deadline: res.data.deadline,
        fee: res.data.fee,
        fine: res.data.fine,
        totalFee: res.data.totalfee
      });
    });
  }
      cancel(){
      isLogins()?  
      this.props.history.push('/Studenthome'): this.props.history.push('/');
    }
    render(){
 return (
  <div className={Style.confirm}>
  <div className={Style.box}>
    <h3> {this.state.admno} {this.state.name} {this.state.sem} {this.state.dept}</h3>
    <span>Scholarship Details: {this.state.scholname}</span>
    <span>Fee Deadline: {this.state.deadline}</span>
    <span>Fee: Rs {this.state.fee}</span><br/>
    <div>
    <br/>
    <span>Fine: Rs {this.state.fine}</span>
    <span className={Style.finedetails} title="Fine for last 7 days">?</span>
    </div>
    <span>Total Amount: Rs {this.state.totalFee}</span>
    <div>
    <Stripebtn amount={this.state.totalFee}/>
    <button className={Style.button6} type="Submit" onClick={this.cancel}> Cancel </button>
    </div>
</div>
</div>

  );}
}

export default Confirm;