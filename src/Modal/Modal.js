import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'

class Modal extends Component {

	confirmButton = () => {
		const {onConfirm, confirmText} = this.props;
		return (
			<Button variant="primary" onClick={onConfirm}>{confirmText}</Button>
		);
	};

	closeButton = () => {
		const { closeText, onHide } = this.props;
		return (
			<Button variant="secondary" onClick={onHide}>{closeText}</Button>
		);
	};


	render(){
		const {title children } = this.props;
		return(
				<Modal.Dialog>
					<Modal.Header closeButton>
						<Modal.Title>{title}</Modal.Title>
					</Modal.Header>

					<Modal.Body>{children}</Modal.Body>

					<Modal.Footer>
						{this.closeButton()}
						{this.confirmButton()}
					</Modal.Footer>
				</Modal.Dialog>
		)
	}
}

export default Modal