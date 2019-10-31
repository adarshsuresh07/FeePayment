import React from 'react';
import ReactDOM from "react-dom"
import Student from './Student.js'
import Admin from './Admin.js'
import Style from './Login.module.css';


class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
      <div className={Style.topRight} >
      {this.state.isToggleOn ? 'Are you an Administrator?  ' : 'Are you a student?  '}
      <button className={Style.button2} onClick={this.handleClick}>Login</button>
      </div>
        {this.state.isToggleOn ? <Student/> : <Admin/> }
      </div>
    );
  }
}
export default Toggle;