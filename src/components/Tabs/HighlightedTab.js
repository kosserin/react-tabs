import React from 'react';
import fastForward from '../../assets/fast-forward.png';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './HighlightedTab.module.css';

const HighlightedTab = (props) => {
  return (
      <div className={styles['highlighted-tab']}>
          <h2>{props.activeTab.title}</h2>
          <h3>{props.activeTab.name}</h3>
          <h4>{props.activeTab.time}</h4>
          <ul className={styles['experience-list']}>
              <AnimatePresence>
            {props.activeTab.experience.map((exp, index) => {
              return <motion.li initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} key={'experience-' + index}>
                <img src={fastForward} alt="arrow right" />
                <span>{exp}</span>
              </motion.li>
            })}
              </AnimatePresence>
          </ul>
          <a href={props.activeTab.link}>More info</a>
      </div>
  )
}

export default HighlightedTab