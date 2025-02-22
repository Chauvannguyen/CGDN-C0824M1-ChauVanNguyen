import React, { Component } from "react";
import "./App.css";

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            text: "",
        };
    }

    handleChange = (event) => {
        this.setState({ text: event.target.value });
    };

    addTodo = (event) => {
        event.preventDefault();
        if (this.state.text.trim()) {
            const newTodo = {
                id: Date.now(),
                text: this.state.text,
                completed: false,
            };
            this.setState((prevState) => ({
                todos: [...prevState.todos, newTodo],
                text: "",
            }));
        }
    };

    toggleTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
        }));
    };

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
        }));
    };

    render() {
        return (
            <div className="container">
                <h1>Todo App</h1>
                <form onSubmit={this.addTodo}>
                    <input
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="Nhập công việc..."
                        className="input"
                    />
                    <button type="submit" className="button">Thêm</button>
                </form>
                <ul className="list">
                    {this.state.todos.map((todo) => (
                        <li key={todo.id} className="item">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => this.toggleTodo(todo.id)}
                            />
                            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                {todo.text}
              </span>
                            <button onClick={() => this.deleteTodo(todo.id)} className="deleteButton">Xóa</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default TodoApp;
