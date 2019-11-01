import React from 'react';
import Style from './Login.module.css';
class Adminhome extends React.Component {
render(){
 return (
  <div>
  <div className={Style.dashboardimg}>
  <img src={require("./cet.png")}/>
  <div className={Style.topRight}>
  <button className={Style.button4} type="Submit"> Logout </button>
  </div>
   <hr/>
  </div> 
  <div className={Style.dashboard}>
   <div className={Style.admindetails}>
    <span> ID </span> 
    <span>Adarsh S </span> 
    <span>Position </span>
   </div>
  <div className={Style.adminfunc}>
   <input type="text" placeholder="Search.."/>
   <img src={require('./search.png')}/>
   <span>Filters:</span>
    <select>
    <option value="all">Sem</option>
    <option value="S1">S1</option> <option value="S2">S2</option> 
    <option value="S3">S3</option> <option value="S4">S4</option> 
    <option value="S5">S5</option> <option value="S6">S6</option> 
    <option value="S7">S7</option> <option value="S8">S8</option> 
     </select>
  <select>
  <option value="Both">Paid/Not</option> <option value="0">Paid</option>
  <option value="0">Not Paid</option>
  </select>
   <select>
  <option value="-1">Scholarship</option>  <option value="0">None</option>
  <option value="2">E-Grantz</option> <option value="3">Merit</option>
  </select>   
  </div> 
</div>
</div>

  );
}
}

export default Adminhome;