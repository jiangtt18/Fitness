import React, {Component} from 'react'
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ModalTemplate extends Component {

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
		const {title, children, show} = this.props;
		return(
				<Modal show={show} centered backdrop>
					<Modal.Header closeButton>
						<Modal.Title>{title}</Modal.Title>
					</Modal.Header>

					<Modal.Body>{children}</Modal.Body>

					<Modal.Footer>
						{this.closeButton()}
						{this.confirmButton()}
					</Modal.Footer>
				</Modal>
		)
	}
}

ModalTemplate.propTypes = {
	title: PropTypes.string,
	onHide: PropTypes.func.isRequired,
	show: PropTypes.bool.isRequired,
	enforceFocus: PropTypes.bool,
	onConfirm: PropTypes.func,
	confirmText: PropTypes.string.isRequired,
	closeText: PropTypes.string,
};

ModalTemplate.defaultProps = {
	enforceFocus: false,
	closeText: 'Close',
};

export default ModalTemplate;