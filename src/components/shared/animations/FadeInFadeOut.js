import React from 'react';
import { motion } from 'framer-motion';

const animationDuration = 0.5;

const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
    transition: {
      // the delay here is a temporary work around to 
      // an issue of the fade in (new component) not 
      // waiting till the fade out is complete. 
      delay: animationDuration,
      duration: animationDuration,
      ease: 'easeIn'
    },
  },
  out: {
    opacity: 0,
  }
};

// the page transition element below only seems
// to effect the "in" -> "out" transition but not the 
// "initial" -> "in" transition.
const pageTransition = {
  duration: animationDuration,
  ease: 'easeOut'
};

function FadeInFadeOut({children}) {
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

export default FadeInFadeOut;