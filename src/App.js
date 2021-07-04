import './App.css';
import HeaderComponent from './cmpnts/HeaderComponent';
import FootererComponent from './cmpnts/FootererComponent';
import ListEmployeeComponent from './cmpnts/ListEmployeeComponent';

function App() {
  return (
    <div className="container">
      <HeaderComponent/>
      <ListEmployeeComponent/>
    </div>
  );
}

export default App;
