import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations/animations';

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
                initial="initial2"
                animate="in2"
                exit="out"
                variants={pageVariants}
            >
                Coming Soon!
            </motion.h2>
        </div>
    )
}

export default About;