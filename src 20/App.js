import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from 'react';
import MainComponent from './components/MainComponent'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Users from './components/Users'
function App() {
  return (
    <div className="App">
    <MainComponent/>
    <AboutUs/>
    <ContactUs/>
    <Users/>
    </div>
  );
}

export default App;
