import React from 'react';
import Table from 'react-bootstrap/Table';
import styles from './Log.module.css';
import './Log.css'

const LogTable = ({title, rows, handlers:{openDeleteConfirmation, openAddItem}}) => {
		return(
			<Table borderless responsive hover>
				<thead>
				<tr>
					<th className={styles.typeWidth}>
						<span className={styles.title}>{title}</span>
						<span className={styles.actionButton} onClick={openDeleteConfirmation}>
							<i className="fas fa-plus-circle" onClick={(e)=>openAddItem(e,title)}></i>
						</span>
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
				{Object.keys(rows).length === 0 ? emptyState(title) : <tbody>{tableBody(rows, title, openDeleteConfirmation)}</tbody>}
			</Table>
		)
};

const emptyState = (title) => {
	return(
		<tbody>
			<tr >
				<td colSpan='8' className={styles.empty}>{`No ${title.toLowerCase()} has been logged yet. Click add icon to add your item!`}</td>
			</tr>
		</tbody>
	)
};

const tableBody = (rows, title, openDeleteConfirmation) => {
	return(
		Object.keys(rows).map((k, idx) => {
			const {id, name = '', amount = 0, unit = '', calories = 0, carbs = 0, proteins = 0, fats = 0, sugar = 0, sodium = 0 } = rows[k];
			return (
				<tr key={`LogTable-${title}-${idx}`} className='logTableBody'>
					<td>{name}</td>
					<td>{`${amount} ${unit}`}</td>
					<td>{`${calories} kcal`}</td>
					<td>{`${carbs} g`}</td>
					<td>{`${proteins} g`}</td>
					<td>{`${fats} g`}</td>
					<td>{`${sodium} g`}</td>
					<td>{`${sugar} g`}</td>
					<td>
						<div className={styles.actionButton} onClick={(e) => openDeleteConfirmation(e,title,id)}>
							<i className='fas fa-trash' />
						</div>
					</td>
				</tr>
			)
		})
	)
};

export default LogTable;
