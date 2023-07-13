import Login from './Login';
import './App.css';
import Option from './Option';
import Vlogin from './Vlogin';
import Home from './Home';
import Fruits from './Fruits';
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
      <Route exact path="/Fruits" component={Fruits}></Route>
    {/* <Home></Home> */}
    </Switch>
    </div>
    </Router>

  );
}

export default App;




