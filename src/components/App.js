import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import '../assets/css/fonts.css'

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects/Projects.js';
import Stack from './Stack.js';
import Error from './Error.js';

import { AnimatePresence, motion } from 'framer-motion';

const animationDuration = 1.5;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      delay: animationDuration,
      when: 'beforeChildren',
      duration: animationDuration
      // staggerChildren: 0.1,
    },
  },
  out: {
    opacity: 0,
  }
};

const pageTransition = {
  duration: animationDuration
};

function PageAnimation({children}) {
  return <motion.div 
    transition={pageTransition}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
  >
    {children}
  </motion.div>
}

function App() {
  const location = useLocation();

  return(
    <AnimatePresence>
       <Switch
        location={location} 
        key={location.pathname}
       >
        <Route exact path="/">
          <PageAnimation>
            <Home />
          </PageAnimation>
        </Route>
        <Route exact path="/about">
          <PageAnimation>
            <About />
          </PageAnimation>
        </Route>
        <Route exact path="/projects">
          <PageAnimation>
            <Projects />
          </PageAnimation>
        </Route>
        <Route exact path="/stack">
          <PageAnimation>
            <Stack />
          </PageAnimation>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default App;