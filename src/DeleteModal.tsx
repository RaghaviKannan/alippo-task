import React from "react";
import "./DeleteModal.css";

interface DeleteModalProps {
  handleConfirmDelete: () => void;
  handleCancelDelete: () => void;
}

const DeleteModal: React.FC<DeleteModalProps> = ({
  handleConfirmDelete,
  handleCancelDelete,
}) => {
  return (
    <div className="modal-overlay">
      <div className="delete-modal">
        <div className="delete-modal-title">Confirm Deletion</div>
        <p className="delete-modal-message">
          Are you sure you want to delete this item?
        </p>
        <div className="delete-modal-buttons">
          <button
            className="delete-modal-button delete-modal-button-confirm"
            onClick={handleConfirmDelete}
          >
            Confirm
          </button>
          <button
            className="delete-modal-button delete-modal-button-cancel"
            onClick={handleCancelDelete}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
