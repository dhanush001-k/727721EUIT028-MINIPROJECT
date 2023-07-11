import Login from './Login';
import './App.css';
import Option from './Option';
import Vlogin from './Vlogin';
import Home from './Home';
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
    {/* <Option></Option> */}
    </Switch>
    </div>
    </Router>

  );
}

export default App;
