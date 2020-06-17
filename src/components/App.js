import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import '../assets/css/fonts.css'

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects/Projects.js';
import Stack from './Stack.js';
import Error from './Error.js';

function App() {
  return(
    <Router>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/stack">
            <Stack />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
    </Router>
  )
}

export default App;