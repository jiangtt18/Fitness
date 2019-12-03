import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Summary.module.css';

const SUBTITLE = {
	goal: 'Daily advise',
	exercise: 'Burned extra with exercise',
	eaten: 'Eaten today'
};

const SummaryTable = (props) => {
	const tableBody = Object.keys(SUBTITLE).map((type, idx) => {
		return(
			<tr key={`summaryTable-${idx}`}>
				<td className={styles.type} colSpan="8">{SUBTITLE[type]}</td>
				<td className={styles.value}>{`${props[type]} kcal`}</td>
			</tr>
		)
	});

	return(
		<Table borderless responsive>
			<thead>
			<tr>
				<th colSpan="8" className={styles.title}>Calories today</th>
				{/*todo: import calender here, so user can pick different date*/}
				{/*<th>Calender</th>*/}
			</tr>
			</thead>
			<tbody>{tableBody}</tbody>
		</Table>
	)
};
export default SummaryTable;