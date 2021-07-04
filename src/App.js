import './App.css';
import HeaderComponent from './cmpnts/HeaderComponent';
import FooterComponent from './cmpnts/FooterComponent';
import ListEmployeeComponent from './cmpnts/ListEmployeeComponent';

function App() {
  return (
    <div className="container">
      <HeaderComponent/>
      <div>
        <ListEmployeeComponent/>
      </div>
      <FooterComponent/>
    </div>
  );
}

export default App;
