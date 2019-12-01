import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'

class SummaryTable extends Component {
	render(){
		return(
				<Table hover borderless responsive>
					<thead>
					<tr>
						<th colSpan="8">Calories today</th>
						<th>Calender</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td colSpan="8">Daily advise(edit)</td>
						<td>{this.props.goal}</td>
					</tr>
					<tr>
						<td colSpan="8">Burned extra with exercise</td>
						<td>{this.props.exercise}</td>
					</tr>
					<tr>
						<td colSpan="8">Eaten today</td>
						<td>{this.props.eaten}</td>
					</tr>
					</tbody>
				</Table>
		)

	}
}
export default SummaryTable;