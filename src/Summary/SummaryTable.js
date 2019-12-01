import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

const SUBTITLE = {
	goal: 'Daily advise',
	exercise: 'Burned exta with exercise',
	eaten: 'Eaten today'
};

class SummaryTable extends Component {

	render(){
		const tablBody = Object.keys(SUBTITLE).map((type, idx) => {
			return(
				<tr key={`summaryTable-${idx}`}>
					<td colSpan="8">{SUBTITLE[type]}</td>
					<td>{`${this.props[type]} kcal`}</td>
				</tr>
			)
		});

		return(
				<Table hover borderless responsive>
					<thead>
					<tr>
						<th colSpan="8">Calories today</th>
						<th>Calender</th>
					</tr>
					</thead>
					<tbody>{tablBody}</tbody>
				</Table>
		)

	}
}
export default SummaryTable;