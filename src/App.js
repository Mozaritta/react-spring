import './App.css';
import HeaderComponent from './cmpnts/HeaderComponent';
import FooterComponent from './cmpnts/FooterComponent';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
        <div  className="container">
          <Switch>
            <Route path="/" exact component="{WelcomePage}"></Route>
            <Route path="/employees" component="{ListEmployeeComponent}"></Route>
            <Route path="/add_employee" component="{CreateEmployeeComponent}"></Route>
          </Switch>
        </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
