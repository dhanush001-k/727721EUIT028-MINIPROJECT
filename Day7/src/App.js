import Login from './Login';
import './App.css';
import Option from './Option';
import Vlogin from './Vlogin';
import Home from './Home';
import Vegetables from './Vegetables';
import Beverages from './Beverages';
import Dairy from './Dairy';
import Healthdrinks from './Healthdrinks';
import Product  from './Product';
import Category from './Category';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
      <Route exact path="/" component={Option}></Route>
      <Route exact path="/Vlogin" component={Vlogin}></Route>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Home" component={Home}></Route>
      <Route exact path="/Category" component={Category}></Route>
      <Route exact path="/Vegetables" component={Vegetables}></Route>
      <Route exact path="/Beverages" component={Beverages}></Route>
      <Route exact path="/Healthdrinks" component={Healthdrinks}></Route>
      <Route exact path="/Dairy" component={Dairy}></Route>
      <Route exact path="/Product" component={Product}></Route>
    {/* <Home></Home> */}
    </Switch>
    </div>
    </Router>

  );
}

export default App;




