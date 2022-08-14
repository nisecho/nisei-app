import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { pageVariants } from '../../animations/animations';

const Artwork = () => {
  return (
    <section>
      <motion.h1
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariants}
      >
        Artwork
      </motion.h1>
      <motion.h1
        initial="initial2"
        animate="in2"
        exit="out"
        variants={pageVariants}
      >
        {/*<li>*/}
        {/*  <Link to='/products/p1'>deez</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to='/products/p2'>deez</Link>*/}
        {/*</li>*/}
        {/*<li>*/}
        {/*  <Link to='/products/p3'>deez</Link>*/}
        {/*</li>*/}
          Coming Soon!
      </motion.h1>
    </section>
  );
};

export default Artwork;
