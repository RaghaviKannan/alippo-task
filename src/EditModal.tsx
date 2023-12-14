import React from "react";
import "./App.css";
import "./EditModal.css";

interface EditModalProps {
  editedValue: string;
  setEditedValue: React.Dispatch<React.SetStateAction<string>>;
  handleSaveEdit: () => void;
  handleCancelEdit: () => void;
}

const EditModal: React.FC<EditModalProps> = ({
  editedValue,
  setEditedValue,
  handleSaveEdit,
  handleCancelEdit,
}) => {
  return (
    <div className="modal-overlay">
      <div className="edit-modal">
        <div className="edit-modal-title">Edit Name</div>
        <input
          type="text"
          className="edit-modal-input"
          value={editedValue}
          onChange={(e) => setEditedValue(e.target.value)}
        />
        <div className="edit-modal-buttons">
          <button className="edit-modal-button" onClick={handleSaveEdit}>
            Save
          </button>
          <button
            className="edit-modal-button edit-modal-button-cancel"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
