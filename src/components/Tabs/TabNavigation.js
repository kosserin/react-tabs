import React, {useEffect, useRef} from 'react';

import styles from './TabNavigation.module.css';

const TabNavigation = (props) => {

    const lineRef = useRef();
    const ulRef = useRef();

    useEffect(() => {
      let idNumber = props.activeTabId.replace(/\D/g, "");
      const linkHeight = ulRef.current.childNodes[idNumber-1].clientHeight;
        if(window.matchMedia('(max-width: 768px)').matches) {

        } else {
          lineRef.current.style.height = `${linkHeight}px`;
          lineRef.current.style.top = `${(idNumber - 1) * 48}px`;
        }
    }, [])

    const getIdHandler = (e) => {
        let idNumber = e.target.id.replace(/\D/g, "");
        props.onTabDisplay(e.target.id);
        if(window.matchMedia('(max-width: 768px)').matches) {
          let offsets = e.target.getBoundingClientRect();
          let top = offsets.top;
          let left = offsets.left;
          lineRef.current.style.width = `${e.target.clientWidth}px`;
          lineRef.current.style.height = `3px`;
          lineRef.current.style.top = 'auto';
          lineRef.current.style.bottom = '-5px';
          lineRef.current.style.left = `${left}px`;
          console.log(e.target.clientWidth)
          console.log(offsets)
        } else {
          lineRef.current.style.height = `${e.target.clientHeight}px`;
          lineRef.current.style.top = `${(idNumber - 1) * 48}px`;
        }
    }

  return (
    <ul ref={ulRef} className={styles['tab-navigation']}>
        {props.data.map(obj => {
        return <li key={'tab-' + obj.id} id={obj.id} className={(props.activeTabId === obj.id) ? styles['active-link'] : ''} onClick={getIdHandler}>{obj.name}</li>
        })}
        <div ref={lineRef} className={styles['tabs-line']}></div>
    </ul>
  )
}

export default TabNavigation