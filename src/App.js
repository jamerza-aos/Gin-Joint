import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Navigtion from './componenten/Navigation'
import HOME from './Home/HOME'
import CONTACT from './Contacttt/CONTACT'
import SHOP from './Shop/SHOP' 


function App() {
  return ( 
      <Router>
       <Navigtion /> 
      <Switch>
       <Route path="/" exact>  <HOME/> </Route> 
      <Route path = "/Entertainment"> </Route>
       <Route path = "/Shop/SHOP"> <SHOP/> </Route>  
      <Route path = "/Events">   </Route>
       <Route path = "/Contacttt/CONTACT"><CONTACT/></Route>
      </Switch>
    </Router>  
    
  )
}

export default App;

