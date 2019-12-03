import React, {Component} from "react";
import ModalTemplate from "./Modal";
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class AddItemModal extends Component{
	constructor(props){
		super(props);
	}



	render(){
		const {
			show,
			onConfirm,
			onHide,
			onChange
		} = this.props;

		return (
			<ModalTemplate
				show={show}
				onConfirm={onConfirm}
				confirmText={'Save'}
				onHide={onHide}>
					<Form.Label>Name</Form.Label>
					<Form.Control required name='addItemName' onChange = {(e) => {onChange(e)}}placeholder="Enter food"/>
					<Form.Label>Calories(kcal)</Form.Label>
					<Form.Control required  name='AddCalorie' onChange = {(e) => {onChange(e)}}placeholder="Enter calorie "/>
					<Row>
						<Col>
							<Form.Label>Carbohydrates(g)</Form.Label>
							<Form.Control name='AddCarb' onChange = {(e) => {onChange(e)}}placeholder="Enter carbs "/>
						</Col>
						<Col>
							<Form.Label>Proteins(g)</Form.Label>
							<Form.Control name='AddProtein' onChange = {(e) => {onChange(e)}}placeholder="Enter protein "/>
						</Col>
						<Col>
							<Form.Label>Fats(g)</Form.Label>
							<Form.Control name='AddFat' onChange = {(e) => {onChange(e)}}placeholder="Enter fat "/>
						</Col>
					</Row>
					<Row>
						<Col>
							<Form.Label>Sodium(g)</Form.Label>
							<Form.Control name='AddSodium' onChange = {(e) => {onChange(e)}}placeholder="Enter sodium amount"/>
						</Col>
						<Col>
							<Form.Label>Sugar(g)</Form.Label>
							<Form.Control name='AddSugar' onChange = {(e) => {onChange(e)}}placeholder="Enter sugar amount"/>
						</Col>

					</Row>
			</ModalTemplate>
		)
	}
};

export default AddItemModal
