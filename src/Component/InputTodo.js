import React, { useState } from "react";

export default function InputTodo({ onAddTodo }) {
    const [inputValue, setInputValue] = useState([]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleAddClick = () => {
        onAddTodo(inputValue);
        setInputValue('');
    };

    return (
        <div style={{width:500,display:'flex',justifyContent:'center',alignItems:'center',marginBottom:20,marginTop:20}}>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddClick}>Add</button>
        </div>
    );
};
