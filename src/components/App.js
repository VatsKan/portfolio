import React from 'react';
import {
  Switch,
  Route,
  useLocation,
  useHistory,
  // Link
} from "react-router-dom";
import '../assets/css/fonts.css'

import { TransitionGroup } from 'react-transition-group'
import FadeIn from './shared/animations/FadeIn.js';
import FadeOut from './shared/animations/FadeOut.js';

import Home from './Home.js';
import About from './About.js';
import Projects from './Projects/Projects.js';
import Stack from './Stack.js';
import Error from './Error.js';

function App() {
  const [inProp, setInProp] = React.useState(true);

  const history = useHistory()
  const location = useLocation();

  //  React.useEffect(()=>{
  //     const startAnimation = setTimeout(()=>{
  //       setInProp(true);
  //     }, 1)
  //     return () => clearTimeout(startAnimation)
  //   }, [])
  // history.listen(()=>{
  //   console.log(inProp)
  //   setInProp(false)
  // })
  return(
    <TransitionGroup>
        <Switch location={location}>
          <Route exact path="/">
      <FadeIn inProp={inProp} setInProp={setInProp}>
            <Home />
      </FadeIn>
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
    </TransitionGroup>
  )
}

export default App;