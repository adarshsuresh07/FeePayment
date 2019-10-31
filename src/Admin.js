import React from 'react';
import Style from './Login.module.css';
class Admin extends React.Component {
render(){
 return (
  <div className={Style.login}>
  <div className={Style.imagecss}>
  <img src={require("./cet.png")}/>
  <hr/>
  </div>
  <div className={Style.formadmin}>
  <span>Admin</span><br/><br/>
  <input type="text" name="uname" placeholder="UserName" />
  <input type="password" name="password" placeholder="Password" />
  <button type="submit" className={Style.button4}>Submit</button>
</div>
</div>

  );
}
}

export default Admin;
