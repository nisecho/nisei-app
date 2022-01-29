import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      y: "-5vh",
      opacity: 1,
      transition: { delay: 0, duration: 1}
    },
    in2: {
        y: "-5vh",
        opacity: 1,
        transition: { delay: 1, duration: .5}
      },
    out: {
      opacity: 0,
      x: "-100vh",
      transition: { ease: 'easeInOut', duration: .5}
    },
  }

function About() {
    return (
        <div>
            <motion.h1
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
            >
                About Me!
            </motion.h1>
            <motion.h2
                initial="initial"
                animate="in2"
                exit="out"
                variants={pageVariants}
            >
                deez nuts
            </motion.h2>
        </div>
    )
}

export default About;