import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import capitalize from 'lodash/capitalize';

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
			return(
				<tr key={`intakeTable-${idx}`}>
					<td colSpan="8">{capitalize(type)}</td>
					<td colSpan="8">{`${this.props[type]} g`}</td>
					<td></td>
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