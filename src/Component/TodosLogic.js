import React from 'react';
import InputTodo from './InputTodo';
import TodosList from './TodosList';
export default function TodosLogic({ todos, onAddTodo, onEditTodo, onDeleteTodo }) {
    return (
        <div>
            <InputTodo onAddTodo={onAddTodo} />
            <TodosList
                todos={todos}
                onEditTodo={onEditTodo}
                onDeleteTodo={onDeleteTodo}
            />
        </div>
    );
};
