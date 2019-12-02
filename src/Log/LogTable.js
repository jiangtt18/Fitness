import React from 'react';
import Table from 'react-bootstrap/Table';

const LogTable = ({title, rows}) => {
		return(
			<Table borderless responsive>
				<thead>
				<tr>
					<th>{title}</th>
					<th>Amount</th>
					<th>Calories</th>
					<th>Carbs</th>
					<th>Proteins</th>
					<th>Fats</th>
					<th>Sodium</th>
					<th>Sugar</th>
				</tr>
				</thead>
				<tbody>{tableBody(rows,title)}</tbody>
			</Table>
		)

};

const tableBody = (rows,title) => {
	return(
		rows.map((row, idx) => {
			const { name = '', amount = 0, unit = '', calories = 0, carbs = 0, proteins = 0, fats = 0, sugar = 0, sodium = 0 } = row;
			return (
				<tr key={`LogTable-${title}-${idx}`}>
					<td>{name}</td>
					<td>{`${amount} ${unit}`}</td>
					<td>{`${calories} kcal`}</td>
					<td>{`${carbs} g`}</td>
					<td>{`${proteins} g`}</td>
					<td>{`${fats} g`}</td>
					<td>{`${sodium} g`}</td>
					<td>{`${sugar} g`}</td>
				</tr>
			)
		})
	)
};

export default LogTable;
