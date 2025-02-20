import { useState } from "react";
import "./App.css";

function App() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (text.trim()) {
            setTodos([...todos, { id: Date.now(), text, completed: false }]);
            setText("");
        }
    };

    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo App</h1>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Nhập công việc..."
                />
                <button type="submit">Thêm</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
                        <button onClick={() => deleteTodo(todo.id)}>Xóa</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
