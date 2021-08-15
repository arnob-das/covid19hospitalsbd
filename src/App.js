import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home/Home/Home';
import Hospitals from './Hospitals/Hospitals';
function App() {
  
  return (
   <Router>
     <Switch>
       <Route exact path="/">
         <Home></Home>
       </Route>
       <Route path="/hospitals">
         <Hospitals></Hospitals>
       </Route>
     </Switch>
   </Router>
  );
}

export default App;
