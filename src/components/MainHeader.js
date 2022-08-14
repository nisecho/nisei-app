import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import SignInButton from './SignInButton'

import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <motion.li
                      whileHover={{
                        scale: 1.2,
                        transition: {duration: .25},
                      }}
          >
            <NavLink activeClassName={classes.active} to='/'>
              Home
            </NavLink>
          </motion.li>
          <motion.li
                      whileHover={{
                        scale: 1.2,
                        transition: {duration: .25},
                      }}
          >
            <NavLink activeClassName={classes.active} to='/artwork'>
              Artwork
            </NavLink>
          </motion.li>
          <motion.li
                      whileHover={{
                        scale: 1.2,
                        transition: {duration: .25},
                      }}
          >
            <NavLink activeClassName={classes.active} to='/about'>
              About Me
            </NavLink>
          </motion.li>
            {/*<motion.li*/}
            {/*whileHover={{*/}
            {/*            scale: 1.0,*/}
            {/*            transition: {duration: .25},*/}
            {/*          }}>*/}
            {/*    <SignInButton/>*/}
            {/*</motion.li>*/}

        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
