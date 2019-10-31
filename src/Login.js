import React from 'react';
import Style from './Login.module.css';
class Login extends React.Component {
render(){
 return (
  <div className={Style.login}>
  <div className={Style.imagecss}>
  <img src={require("./cet.png")}/>
  <hr/>
  </div>
  <div className={Style.contact_form}>
  <input type="text" name="uname" placeholder="UserName" />
  <input type="password" name="password" placeholder="Password" />
  <input type="submit"/>
</div>
</div>

  );
}
}

export default Login;
