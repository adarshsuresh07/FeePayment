import React from 'react';
import Style from './css/Error.module.css';
class Error extends React.Component {
  constructor(props) {
    super(props);
    this.gohome = this.gohome.bind(this);
  }
  gohome() {
    this.props.history.push('/');
  }
  render() {
    return (
      <div className={Style.error}>
        <h1>Error!!</h1>
        <img src={require('./fixit.jpg')} alt='Go home' onClick={this.gohome} />
        <h2>Let's Go Home</h2>
      </div>
    );
  }
}

export default Error;