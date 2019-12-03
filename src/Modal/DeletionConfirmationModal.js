import React from "react";
import ModalTemplate from "./Modal";

const DeletionConfirmationModal = (
	{
		showDeletionModal,
		onConfirm,
		onHide,
		removingItemName,
		removingType
	}) => {
	return (
		<ModalTemplate
			show={showDeletionModal}
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
