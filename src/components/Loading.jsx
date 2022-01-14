import React from 'react'
import loading from '../common/imgs/loading.svg'
import styles from '../styles/index.module.scss'

const Loading = (props) => {
  const { tip } = props;
  return(
    <div className={styles.loading}>
      <div className={styles.imgBox}>
        <img src={loading} alt="img" />
      </div>
      <div className={styles.loadingTip}>
        {tip}
      </div>
    </div>
  )
}

export default Loading;