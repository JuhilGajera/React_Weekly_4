import { useState } from "react";
export default function TodoApp() {
    const [todos, setTodos] = useState([]);

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const handleEditTodo = (index, editedTodo) => {
        const updatedTodos = [...todos];
        updatedTodos[index] = editedTodo;
        setTodos(updatedTodos);
    };

    const handleDeleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <Header />
            <TodosLogic
                todos={todos}
                onAddTodo={handleAddTodo}
                onEditTodo={handleEditTodo}
                onDeleteTodo={handleDeleteTodo}
            />
        </div>
    );
};
