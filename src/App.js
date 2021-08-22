import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Home/Home/Home';
import Hospitals from './Hospitals/Hospitals';
import HospitalsDetails from './HospitalsDetails/HospitalsDetails';
import Gmap from './Gmap/Gmap';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/gmap">
          <Gmap></Gmap>
        </Route>
        <Route path="/hospitals">
          <Hospitals></Hospitals>
        </Route>
        <Route path="/hospitalsDetails/:hospitalId">
          <HospitalsDetails></HospitalsDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
