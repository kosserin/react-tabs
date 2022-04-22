import React from 'react';

import styles from './Heading.module.css';

const Heading = (props) => {
  return (
    <div className={styles.heading}>
        <h1>{props.children}</h1>
        <div className={styles['heading-line']}></div>
    </div>
  )
}

export default Heading