import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation
  // Link
} from "react-router-dom";
import '../assets/css/fonts.css'

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects/Projects.js';
import Stack from './Stack.js';
import Error from './Error.js';

import { AnimatePresence, motion } from 'framer-motion';


const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  }
};

function App() {
  // const location = useLocation();
  // console.log(location.pathname)
  return(
    <Router>
      <AnimatePresence>
       <Switch 
      //  location={location} key={location.pathname}
       >
          <Route exact path="/">
            <motion.div 
             initial="initial"
             animate="in"
             exit="out"
             variants={pageVariants}
            >
              <Home />
            </motion.div>
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
      </AnimatePresence>
    </Router>
  )
}

export default App;