import logo from './logo.svg';
import './App.css';
import {useState} from "react";

const styles = {
    container: { width: "300px", margin: "50px auto", textAlign: "center", background: "white", padding: "20px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)" },
    input: { padding: "8px", width: "70%", marginRight: "10px" },
    button: { padding: "8px", background: "blue", color: "white", border: "none", cursor: "pointer" },
    list: { listStyle: "none", padding: 0 },
    item: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #ddd" },
    deleteButton: { background: "red", color: "white", border: "none", padding: "5px", cursor: "pointer" }
};


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
                todos.id === id ? {...todo, completed: !todo.completed} : todo
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
                    placeholder="Nhập công việc..?"
                    // style={styles.input}

                />
                <button type="submit" style={styles.button}>Thêm</button>
            </form>
            <ul style={styles.list}>
                {todos.map((todo) => (
                    <li key={todo.id}> style={styles.item}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleTodo(todo.id)}
                        />
                        <span style={{ textDecoration: todo.completed ? "line-through" : "none"}}>
                        {todo.text}
                    </span>
                        <button onClick={() => deleteTodo(todo.id)} style={styles.deleteButton}>Xoá</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default App;
