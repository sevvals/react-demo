import './App.css';
import Navbar from './components/Navbar';
import Users from './components/Users';
import React, { Component } from "react";

class App extends Component{

  render() {
    return (
      <div className="container">
        <Navbar title = "User App"/>
        <hr/>
        <Users />
  
      </div>
    );
  }
}

export default App;