import React from 'react';
import TodoItem from './TodoItem';
export default function TodosList({ todos, onEditTodo, onDeleteTodo }) {
    console.log(todos);
    return (
        <div>
            {todos.map((todo, index) => (
                <><TodoItem
                    key={index}
                    todo={todo}
                    onEdit={(editedTodo) => onEditTodo(index, editedTodo)}
                    onDelete={() => onDeleteTodo(index)} /></>
            ))}
        </div>
    );
};