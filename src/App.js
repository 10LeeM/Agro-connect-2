import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter  as Router, Switch} from "react-router-dom";
import './App.css';
import HomePage from './Components/HomePage'
import ServicesComponent from './Components/ServicesComponent';
import HeaderComponent from './Components/HeaderComponent';
import SmartMarketComponent from './Components/SmartMarketComponent';
import ContactComponent from './Components/ContactComponent';
import FooterComponent from './Components/footerComponent';
import NotFoundPage from './Components/NotFoundPage';

function App(){
  return(
    //Navigational routes
  <Router>
    <div>
      <HeaderComponent/>
      <hr/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route  path="ServicesComponent" component={ServicesComponent}/>
        <Route  path="/SmartMarketComponent" component={SmartMarketComponent}/>
        <Route  path="/ContactComponent" component={ContactComponent}/>  
        <Route  path="*" component={NotFoundPage}/>
        
      </Switch>
      <FooterComponent/>
    </div>
  </Router>
)
}
export default App;
