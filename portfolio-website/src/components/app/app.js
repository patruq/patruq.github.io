import React from 'react';
import HomepageImage from './components/HomepageImage'
import './App.css';
import '../node_modules/bootstrap/dist/css/boostrap.min.css';
import { FrowserRouter as Router, Route, Switch } from "react-router-dom"
import { NavigationBar } from './components/NavigationBar'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
  );
}

export default App;
