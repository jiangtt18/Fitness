import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Log.module.css'

const LogTable = ({title, rows, handlers:{openDeleteConfirmation, openAddItem}}) => {
		return(
			<Table borderless responsive>
				<thead>
				<tr>
					<th>
						<span>{title}</span>
						<span><i className="fas fa-plus-circle"></i></span>
					</th>
					<th>Amount</th>
					<th>Calories</th>
					<th>Carbs</th>
					<th>Proteins</th>
					<th>Fats</th>
					<th>Sodium</th>
					<th>Sugar</th>
					<th>Actions</th>
				</tr>
				</thead>
				<tbody>{tableBody(rows,title, openDeleteConfirmation)}</tbody>
			</Table>
		)

};

const tableBody = (rows,title,openDeleteConfirmation) => {
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
					<td>
						<div className={styles.actionButton} onClick={openDeleteConfirmation}>
							<i className='fas fa-trash' />
						</div>
					</td>
				</tr>
			)
		})
	)
};

export default LogTable;