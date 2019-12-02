import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import styles from './Summary.module.css'

const SUBTITLE = {
	goal: 'Daily advise',
	exercise: 'Burned exta with exercise',
	eaten: 'Eaten today'
};

class SummaryTable extends Component {

	render(){
		const tableBody = Object.keys(SUBTITLE).map((type, idx) => {
			return(
				<tr key={`summaryTable-${idx}`}>
					<td className={styles.type} colSpan="8">{SUBTITLE[type]}</td>
					<td className={styles.value}>{`${this.props[type]} kcal`}</td>
				</tr>
			)
		});

		return(
				<Table borderless responsive>
					<thead>
					<tr>
						<th colSpan="8" className={styles.title}>Calories today</th>
						<th>Calender</th>
					</tr>
					</thead>
					<tbody>{tableBody}</tbody>
				</Table>
		)

	}
}
export default SummaryTable;