import React from 'react';
import classNames from 'classnames';
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Summary.module.css';
import './SummaryProgress.css'

const SummaryProgress = (props) => {
	const {remaining, goal, eaten} = props;
	const label = (eaten/goal).toFixed(2)*100;

	return(
		<div className={styles.progressSection}>
			<div>
				<span className={styles.value}>I can still eat </span>
				<span className={styles.type}>{remaining < 0 ? 0 : remaining}</span>
			 </div>
			<ProgressBar animated now={label} className='barHeight' />
			<div className={classNames(styles.label, styles.value)}>
				<p>0</p>
				<p>{goal}</p>
			</div>
		</div>
	)
};

export default SummaryProgress;