import React from 'react';
import Style from './Login.module.css';
class Adminhome extends React.Component {
render(){
 return (
  <div>
  <div className={Style.dashboardimg}>
  <img src={require("./cet.png")}/>
  <div className={Style.topRight}>
  <button className={Style.button3} type="Submit"> Logout </button>
  </div>
  <hr/>
  </div>
  <div className={Style.dashboard}>
  <div className={Style.details}>
    <span> 170668 </span> 
    <span>Adarsh S </span> 
    <span>S5 </span>
    <span> Computer Science & Engineering</span>
   </div>
   <div className={Style.details}> 
    <span>Scholarship Details: E-grantz</span>
    <span>Fee Deadline: 29/08/2019</span>
    <span>Paid : Yes</span>
    <div>
    <span className={Style.finedetails} title="Base fine:Rs.10 It will be double after next two days and so on">?</span>
    <span>Fine imposed: No</span>
    </div>
    <button className={Style.button1} type="Submit"> Pay </button>
  </div>
  </div>
</div>

  );
}
}

export default Adminhome;