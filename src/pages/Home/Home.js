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
  out: {
    opacity: 0,
    x: "-100vh",
    transition: { ease: 'easeInOut', duration: .5}
  },
}

function Home() {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        >
            <div>
                <h1>Home Page</h1>
                
            </div>
        </motion.div>
    )
}

export default Home;