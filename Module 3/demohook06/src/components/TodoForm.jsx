import React, { useState } from 'react';
import './TodoForm.css';

function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập công việc..."
                className="todo-input"
            />
            <button type="submit" className="add-button">Thêm</button>
        </form>
    );
}

export default TodoForm;
