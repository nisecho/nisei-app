import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
// Please note:
// <Link to="/products/p1" ... could also be written as
// <Link to="p1" ... with React Router v6

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
      <motion.ul
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
      >
        <li>
          <Link to='/products/p1'>deez</Link>
        </li>
        <li>
          <Link to='/products/p2'>deez</Link>
        </li>
        <li>
          <Link to='/products/p3'>deez</Link>
        </li>
      </motion.ul>
    </section>
  );
};

export default Artwork;
