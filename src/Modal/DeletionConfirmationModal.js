import React from "react";
import ModalTemplate from "./Modal";

const DeletionConfirmationModal = (
	{
		show,
		onConfirm,
		onHide,
		removingItemName,
		removingType
	}) => {
	return (
		<ModalTemplate
			show={show}
			onConfirm={onConfirm}
			confirmText={'Delete'}
			onHide={onHide}>
			{'Are you sure you want to delete '}
			<strong>{removingItemName}</strong>
			{` from ${removingType} ? `}
		</ModalTemplate>
	)
};

export default DeletionConfirmationModal
