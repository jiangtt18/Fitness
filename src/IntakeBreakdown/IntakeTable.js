import React, { Component } from 'react';
import capitalize from 'lodash/capitalize';
import Table from 'react-bootstrap/Table'
import ProgressBar from 'react-bootstrap/ProgressBar'

// todo: configurable by customer. Set below 6 categories for simplicity
const SUBTITLE = [
	'carbohydrates',
	'proteins',
	'fats',
	'sodium',
	'sugar'
];


class IntakeTable extends Component {

	render(){
		const tableBody = SUBTITLE.map((type, idx) => {
			const cur = this.props[type];
			const target = this.props.goals[type];
			const label = cur/target*100;
			return(
				<tr key={`intakeTable-${idx}`}>
					<td>
						<div>{capitalize(type)}</div>
						<div>{`Goal: ${target}`}</div>
					</td>
					<td>{`${cur} g`}</td>
					<td><ProgressBar animated now={label} label={`${label}%`} /></td>
				</tr>
			)
		});

		return(
			<Table hover borderless responsive>
				<thead>
				<tr>
					<th colSpan="8"> Nutrition intake</th>
					<th></th>
				</tr>
				</thead>
				<tbody>{tableBody}</tbody>
			</Table>
		)

	}
}
export default IntakeTable;