import React from "react";
import ModalTemplate from "./Modal";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './Modal.module.css';

const AddItemModal = (
	{
		show,
		onConfirm,
		onHide,
		onChange,
		errorMessage
	}) => {
		return (
			<ModalTemplate
				show={show}
				onConfirm={onConfirm}
				confirmText={'Save'}
				onHide={onHide}>
				<p className={styles.error}>{errorMessage&&errorMessage}</p>
				{renderForm(onChange)}
			</ModalTemplate>
		)
};

const renderForm = (onChange, validated) => {
	return(
		<Form>
			<Form.Label>Name</Form.Label>
			<Form.Control required type="text" name='addItemName' onChange = {(e) => {onChange(e)}} placeholder="Enter food"/>

			<Form.Label>Calories(kcal)</Form.Label>
			<Form.Control required type="number" name='AddCalorie' onChange = {(e) => {onChange(e)}} placeholder="Enter calorie "/>

			<Row>
				<Col>
					<Form.Label>Carbohydrates(g)</Form.Label>
					<Form.Control type="number" name='AddCarb' onChange = {(e) => {onChange(e)}} placeholder="Enter carbs "/>
				</Col>
				<Col>
					<Form.Label>Proteins(g)</Form.Label>
					<Form.Control type="number" name='AddProtein' onChange = {(e) => {onChange(e)}} placeholder="Enter protein "/>
				</Col>
				<Col>
					<Form.Label>Fats(g)</Form.Label>
					<Form.Control type="number" name='AddFat' onChange = {(e) => {onChange(e)}} placeholder="Enter fat "/>
				</Col>
			</Row>

			<Row>
				<Col>
					<Form.Label>Sodium(g)</Form.Label>
					<Form.Control type="number" name='AddSodium' onChange = {(e) => {onChange(e)}} placeholder="Enter sodium amount"/>
				</Col>
				<Col>
					<Form.Label>Sugar(g)</Form.Label>
					<Form.Control type="number" name='AddSugar' onChange = {(e) => {onChange(e)}} placeholder="Enter sugar amount"/>
				</Col>
			</Row>
		</Form>
	)
};

export default AddItemModal