import React from 'react';
import classNames from 'classnames';
import styles from './CardTop.module.css'

const CardTop = ({ children, className, ...rest }) => {
  return(
    <div className={classNames(styles.cardTop, className,)} {...rest}>
      {children}
    </div>
  )
}
export default CardTop