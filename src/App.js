import React from 'react';
import './App.css';
import Calendar from './Calendar/Calander'
import Header from './Header/Header'
import { Route, Switch, useLocation } from "react-router-dom";
import Home from './Home/Home'


function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/home" component={Home} />
      <Route path="/calendar" component={Calendar} />
    </div>
  );
}

export default App;
