import React from "react"
import { BrowserRouter, Switch } from 'react-router-dom';
import Student from './Components/Student.js'
import Admin from './Components/Admin.js'
import Studenthome from './Components/Studenthome.js';
import Adminhome from './Components/Adminhome.js';
import PublicRoute from './Components/Publicroute.js';
import ResetRoute from './Components/ResetRoute.js';
import StudentRoute from './Components/Studentroute.js';
import AdminRoute from './Components/Adminroute.js';
import Reset from './Components/Reset.js';
import Newstudentreg from './Components/Newstudentreg';
import Errorpage from './Components/Errorpage.js'
class App extends React.Component {


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <PublicRoute restricted={true} component={Student} path="/" exact />
          <PublicRoute restricted={true} component={Admin} path="/Admin" exact />
          <StudentRoute component={Studenthome} path="/Studenthome" exact />
          <AdminRoute component={Adminhome} path="/Adminhome" exact />
          <ResetRoute component={Reset} path="/Reset" exact />
          <AdminRoute component={Newstudentreg} path="/Newstudentreg" exact />
          <PublicRoute restricted={false} component={Errorpage} path="/error" exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
