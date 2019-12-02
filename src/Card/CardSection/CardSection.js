import React from 'react';
import classNames from 'classnames';
import styles from './CardSection.module.css'

const CardSection = ({ children, className, ...rest }) => {
  return(
    <div className={classNames(styles.cardTop, className,)} {...rest}>
      {children}
    </div>
  )
}
export default CardSection