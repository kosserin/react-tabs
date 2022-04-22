import React from 'react';
import Heading from './components/Heading/Heading';
import Tabs from './components/Tabs/Tabs';
import { motion } from 'framer-motion';
import {container, item} from './framer-variables';

const App = () => {
  return (
    <React.Fragment>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
          <Heading>Experience</Heading>
        </motion.div>
        <motion.div variants={item}>
          <Tabs />
        </motion.div>
      </motion.div>
    </React.Fragment>
  )
}

export default App