import { useState } from "react";
export default function TodoItem({ todo, onEdit, onDelete }) {
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo);

    const handleEditClick = () => {
        setIsEditMode(true);
    };

    const handleSaveClick = () => {
        onEdit(editedTodo);
        setIsEditMode(false);
    };

    const handleCancelClick = () => {
        setIsEditMode(false);
        setEditedTodo(todo);
    };

    const handleInputChange = (event) => {
        setEditedTodo({
            ...editedTodo,
            text: event.target.value,
        });
    };

    return (
        // <li>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center", backgroundColor: "pink", width: 480, marginBottom: 5 ,padding:10,borderRadius:10}}>
            {isEditMode ? (
                <><input type="text" value={editedTodo.text} onChange={handleInputChange} /><button onClick={handleSaveClick}>Save</button><button onClick={handleCancelClick}>Cancel</button></>
            ) : (
                <>
                    <p style={{margin:0}}>{todo}</p>
                    <div>
                        <button onClick={handleEditClick}>Edit</button>
                        <button onClick={onDelete}>Delete</button>
                    </div>
                </>
            )}
        </div>
        // </li>
    );
};
