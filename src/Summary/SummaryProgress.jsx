import React, { Component } from 'react';
import classNames from 'classnames';
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Summary.module.css';
import './SummaryProgress.css'

class SummaryProgress extends Component {
	render(){
		const {remaining, goal, eaten} = this.props;
		const label = (eaten/goal).toFixed(2)*100;
		return(
			<div className={styles.progressSection}>
				<div>
					<span className={styles.value}>I can still eat </span>
					<span className={styles.type}>{remaining}</span>
				 </div>
				<ProgressBar animated now={label} className='barHeight' />
				<div className={classNames(styles.label, styles.value)}>
					<p>0</p>
					<p>{goal}</p>
				</div>
			</div>
		)

	}
}

export default SummaryProgress;