import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/nav-bar';
import { Footer } from './components/footer';
import { Home } from './components/routes/home'
import { About } from './components/routes/about'
import { Portfolio} from './components/routes/portfolio'
import { Contact} from './components/routes/contact'

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/routes/about" component={About} />
          <Route path="/routes/portfolio" component={Portfolio} />
          <Route path="/routes/contact" component={Contact} />
        </Switch>
      </Router>
    <div className="page-container"></div>
    {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
