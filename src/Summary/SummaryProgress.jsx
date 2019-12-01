import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import styles from './Summary.module.css';

class SummaryProgress extends Component {
	render(){
		const {remaining, goal} = this.props;
		return(
			<div className={styles.progress}>
				<div>{`I can still eat ${remaining}`}</div>
				<ProgressBar animated now={45} />
				<div className={styles.label}>
					<p>0</p>
					<p>{goal}</p>
				</div>
			</div>
		)

	}
}

export default SummaryProgress;