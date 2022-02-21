import React, { Component } from 'react'
import Hike from "./hike/Hike"
import Login from "./Login/Login"
class App extends Component {
  render() {
    return (
      <div>
    <Hike/>
 
    <Login/>
      </div>
    )
  }
}

export default App