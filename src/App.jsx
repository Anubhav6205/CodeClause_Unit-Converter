import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact"
import Help from "./components/Help"
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <Router>
      <Navbar></Navbar>
    
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/>
      <Route path="/help" component={Help}/>
      <Route exact path="/" component={Home}/>
      </Router>
    </div>
  );
}
