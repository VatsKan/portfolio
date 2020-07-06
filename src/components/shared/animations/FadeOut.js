import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in`,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 0 },
  exiting:  { opacity: 1 },
  exited:  { opacity: 1 },
};


export default function FadeAnimation(props){
    // React.useEffect(()=>{
    //   const startAnimation = setTimeout(()=>{
    //     setInProp(true);
    //   }, 5000)
    //   return () => clearTimeout(startAnimation)
    // }, [])

    return <Transition in={props.inProp} timeout={duration}>
    {state => (<div style={{...defaultStyle, ...transitionStyles[state]}}>
      {props.children}
    </div>)}
    </Transition>
}