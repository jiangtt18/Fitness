import React, { Component } from 'react';
import classNames from 'classnames';
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Summary.module.css';
import './SummaryProgress.css'

class SummaryProgress extends Component {
	render(){
		const {remaining, goal} = this.props;
		return(
			<div className={styles.progressSection}>
				<div>
					<span className={styles.value}>I can still eat </span>
					<span className={styles.type}>{remaining}</span>
				 </div>
				<ProgressBar animated now={45} className='barHeight' />
				<div className={classNames(styles.label, styles.value)}>
					<p>0</p>
					<p>{goal}</p>
				</div>
			</div>
		)

	}
}

export default SummaryProgress;