import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, deleteTodo }) {
    return (
        <div className="todo-item">
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-button">
                🗑 Xoá
            </button>
        </div>
    );
}

export default TodoItem;