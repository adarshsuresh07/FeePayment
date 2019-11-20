import React from "react"
import { BrowserRouter, Switch } from 'react-router-dom';
import Student from './Components/Student.js'
import Admin from './Components/Admin.js'
import Studenthome from './Components/Studenthome.js';
import Adminhome from './Components/Adminhome.js';
import Confirm from './Components/Confirmation.js';
import PublicRoute from './Components/Publicroute.js';
import StudentRoute from './Components/Studentroute.js';
import AdminRoute from './Components/Adminroute.js';
import Reset from './Components/Reset.js';
class App extends React.Component {


  render() {
    return (
  <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={Student} path="/" exact />
          <PublicRoute restricted={true} component={Admin} path="/Admin" exact />
          <StudentRoute component={Studenthome} path="/Studenthome" exact />
          <AdminRoute component={Adminhome} path="/Adminhome" exact />
          <StudentRoute component={Confirm} path="/Confirmation" exact />
          <StudentRoute component={Reset} path="/Reset" exact />
          <AdminRoute component={Reset} path="/Reset" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
