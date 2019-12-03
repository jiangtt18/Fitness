import React, { Component } from 'react';
import capitalize from 'lodash/capitalize';
import classNames from 'classnames';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './IntakeBreakdown.module.css';
import './IntakeProgress.css';

// todo: configurable by customer. Set below 6 categories for simplicity
const SUBTITLE = [
	'carbohydrates',
	'proteins',
	'fats',
	'sodium',
	'sugar'
];

const COLOR = {
	'carbohydrates':'success',
	'proteins':'danger',
	'fats':'info',
	'sodium':'warning',
};

const tableBody = (props) => {
	return SUBTITLE.map((type, idx) => {
		const cur = props[type];
		const target = props.goals[type];
		const label = (cur/target).toFixed(2)*100;
		return(
			<tr key={`intakeTable-${idx}`}>
				<td className='w-27'>
					<div className={styles.type}>{capitalize(type)}</div>
					<div className={styles.value}>{`Goal: ${target}`}</div>
				</td>
				<td className={classNames(styles.type,'w-23')}>{`${cur} g`}</td>
				<td className='w-50'>
					<ProgressBar animated now={label} label={`${label}%`} variant={COLOR[type]} className='IntakeProgress' />
				</td>
			</tr>
		)
	});
};

const IntakeTable = (props) => {
		return(
			<Table borderless responsive>
				<thead>
				<tr>
					<th colSpan='3' className={styles.title}>Nutrition intake</th>
				</tr>
				</thead>
				<tbody>{tableBody(props)}</tbody>
			</Table>
		)
};
export default IntakeTable;