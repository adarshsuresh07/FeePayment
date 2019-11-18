import React from 'react';
import { logouta, getTokena } from '../utils';
import Style from './css/Adminhome.module.css';
import Axios from 'axios'
class Adminhome extends React.Component  {
  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.state = {
      cId: '',
      name: '',
      programme: '',
      sem: '',
      dept: '',
      paidOrNot: '',
      scholName: ''
    };
  };

  componentDidMount() {
    let config = {
      headers: {
        Authorization: 'bearer '+getTokena()
      }
    };
    Axios.get('http://localhost:3001/admin',config)
    .then((res) => {
      this.setState({
        cId: res.data.username,
        name: res.data.name
      });
    });
  };

    handleLogout(){
        logouta();
        this.props.history.push('/');
    };
    handleChange({ target }) {
      console.log(target.name,target.value);
      this.setState({ [target.name]: target.value });
    };
    submitSearch() {
      let data = {};
      // if(this.state.programme !== "")
        // data = {...data,...{programme: this.state.programme}};
      if(this.state.sem !== "")
        data = {...data,...{sem: this.state.sem}};
      if(this.state.dept !== "")
        data = {...data,...{dept: this.state.dept}};
      if(this.state.paidOrNot !== "")
        data = {...data,...{paidOrNot: this.state.paidOrNot}};
      if(this.state.scholName !== "")
        data = {...data,...{scholName: this.state.scholName}};
      let config = {
        headers: {
          Authorization: 'bearer '+getTokena()
        },
        params: data
      };
      Axios.get('http://localhost:3001/admin/search', config)
      .then((res) => console.log(res));  
    }
    render(){
 return (
  <div>
  <div className={Style.dashboardimg}>
  <img src={require("./cet.png")}/>
  <div className={Style.topRight}>
  <button className={Style.button4} onClick={this.handleLogout}> Logout </button>
  </div>
   <hr/>
  </div> 
  <div className={Style.dashboard}>
   <div className={Style.admindetails}>
    <span>{this.state.cId}</span> 
    <span>{this.state.name}</span> 
   </div>
  <div className={Style.adminfunc}>
   <input type="text" placeholder="Search.."/>
   <span>Filters:</span>
    <select name="programme" value={this.state.programme} onChange={this.handleChange}>
    <option value="">Programme</option> <option value="UG">UG</option>
    <option value="PG">PG</option>
   </select>
   { this.state.programme==="UG" ?
   <span>
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
     : this.state.programme==="PG" ?
    <span>
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
     </select> </span>:<span/>
   }
  <select name="paidOrNot" onChange={this.handleChange}>
  <option value="">Paid/Not</option> <option value="1">Paid</option>
  <option value="0">Not Paid</option>
  </select>
   <select name="scholName" onChange={this.handleChange}>
  <option value="">Scholarship</option>  <option value="None">None</option>
  <option value="E-Grantz">E-Grantz</option> <option value="Merit">Merit</option>
  </select>   
  <img src={require('./search.png')} onClick={this.submitSearch}/>
  </div> 
</div>
</div>

  );
}
}
export default Adminhome;