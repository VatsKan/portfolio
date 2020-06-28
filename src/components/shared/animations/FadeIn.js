import React from 'react';
import { Transition } from 'react-transition-group';

const duration = 1500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-out`,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};


export default function FadeAnimation(props){
    const [inProp, setInProp] = React.useState(false);

    React.useEffect(()=>{
      const startAnimation = setTimeout(()=>{
        setInProp(true);
      }, 1)
      return () => clearTimeout(startAnimation)
    }, [])

    return <Transition in={inProp} timeout={duration}>
    {state => (<div style={{...defaultStyle, ...transitionStyles[state]}}>
      {props.children}
    </div>)}
    </Transition>
}
