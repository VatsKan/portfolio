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

import { AnimatePresence } from 'framer-motion';
import FadeInFadeOut from './shared/animations/FadeInFadeOut.js';

function App() {
  const location = useLocation();

  return(
    <AnimatePresence>
       <Switch
        location={location} 
        key={location.pathname}
       >
        <Route exact path="/">
          <FadeInFadeOut>
            <Home />
          </FadeInFadeOut>
        </Route>
        <Route exact path="/about">
          <FadeInFadeOut>
            <About />
          </FadeInFadeOut>
        </Route>
        <Route exact path="/projects">
          <FadeInFadeOut>
            <Projects />
          </FadeInFadeOut>
        </Route>
        <Route exact path="/stack">
          <FadeInFadeOut>
            <Stack />
          </FadeInFadeOut>
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

export default App;