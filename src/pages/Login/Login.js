import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations/animations';

function Home() {
    return (
        <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        >
            <div>
                <p>Home Page</p>

            </div>
        </motion.div>
    )
}

export default Home;