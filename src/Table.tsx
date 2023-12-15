import React, { useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import "./Table.css";
import TableRow from "./TableRow";

interface TableProps {
  data: TableRow[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  const [editRowIndex, setEditRowIndex] = useState<number | null>(null);
  const [deleteRowIndex, setDeleteRowIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");
  const [tableData, setTableData] = useState<TableRow[]>(data);

  const handleEdit = (index: number) => {
    const valueToEdit = tableData[index].name || "";
    setEditedValue(valueToEdit);
    setEditRowIndex(index);
  };

  const handleSaveEdit = () => {
    if (editRowIndex !== null) {
      const newData = [...tableData];
      newData[editRowIndex].name = editedValue;
      setTableData(newData);
      setEditRowIndex(null);
    }
  };

  const handleCancelEdit = () => {
    setEditRowIndex(null);
  };

  const handleDelete = (index: number) => {
    setDeleteRowIndex(index);
  };

  const handleConfirmDelete = () => {
    if (deleteRowIndex !== null) {
      const newData = [...tableData];
      newData.splice(deleteRowIndex, 1);
      setTableData(newData);
      setDeleteRowIndex(null);
    }
  };

  const handleCancelDelete = () => {
    setDeleteRowIndex(null);
  };

  return (
    <div>
      {tableData.length === 0 ? (
        <p>No data available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>SL. No</th>
              <th>Name</th>
              <th>Age</th>
              <th>City</th>
              <th>Pincode</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name || "-"}</td>
                <td>{item.age !== null ? item.age : "-"}</td>
                <td>{item.city || "-"}</td>
                <td>{item.pinCode || "-"}</td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {editRowIndex !== null && (
        <EditModal
          editedValue={editedValue}
          setEditedValue={setEditedValue}
          handleSaveEdit={handleSaveEdit}
          handleCancelEdit={handleCancelEdit}
        />
      )}

      {deleteRowIndex !== null && (
        <DeleteModal
          handleConfirmDelete={handleConfirmDelete}
          handleCancelDelete={handleCancelDelete}
        />
      )}
    </div>
  );
};

export default Table;
