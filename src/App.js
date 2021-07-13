import './App.css';
import HeaderComponent from './cmpnts/HeaderComponent';
import FooterComponent from './cmpnts/FooterComponent';
import ListEmployeeComponent from './cmpnts/ListEmployeeComponent';
import CreateEmployeeComponent from './cmpnts/CreateEmployeeComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WelcomePage from './cmpnts/WelcomePage';
// import UpdateEmployee from './cmpnts/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div  className="container">
          <Switch>
            <Route path="/" exact component={WelcomePage}></Route>
            <Route path="/employees" component={ListEmployeeComponent}></Route>
            <Route path="/add_employee/:id" component={CreateEmployeeComponent}></Route>
            {/* <Route path="/update/:id" component={UpdateEmployee}></Route> */}
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
