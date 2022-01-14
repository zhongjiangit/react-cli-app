import React from 'react'
import styles from '../styles/index.module.scss'

const Loading = (props) => {
  const { tip } = props;
  return(
    <div className={styles.loading}>
      <div>
        <img src="" alt="" />
      </div>
      <div>{tip}</div>
    </div>
  )
}

export default Loading;