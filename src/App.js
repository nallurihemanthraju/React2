import React from "react";
// import Navbar from "./Axios/Navbar"
// import ContactApp from "./Axios/ContactApp";
// import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Message from "./Hooks/useState/Message";
import MessageCopy from "./Hooks/useState/MessageCopy";
class App extends React.Component{
  render(){
    return <React.Fragment>
    {/* <Router>
   <Navbar/> */}
   <Message/>
   <MessageCopy/>
    {/* <Switch>
   <Route path='/contact' component={ContactApp}/>
      </Switch>
    </Router>
     */}
    </React.Fragment>
  }
}
export default App;