import React from "react";
import {BrowserRouter ,Switch,Route} from "react-router-dom"
import ContactApp from "./Contactapp/ContactApp"
import Navbar from "./Contactapp/Navbar"
 let App = () => {

   return <React.Fragment>

   <BrowserRouter>

   <Navbar/>

   <Switch>
   <Route path="/contact" component={ContactApp}/>
   </Switch>
   </BrowserRouter>
   </React.Fragment>
 }
 
 export default App;
 
