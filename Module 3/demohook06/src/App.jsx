import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './assets/styles.css';

function App() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Học React' },
        { id: 2, text: 'Làm bài tập CodeGym' },
        { id: 3, text: 'Xem phim thư giãn' }
    ]);

    // Hàm thêm công việc
    const addTodo = (text) => {
        setTodos([...todos, { id: Date.now(), text }]);
    };

    // Hàm xoá công việc
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <>
            <Header />
            <main>
                <TodoForm addTodo={addTodo} />
                {todos.length === 0 ? (
                    <p>No data.</p>
                ) : (
                    <div className="container">
                        {todos.map(todo => (
                            <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />
                        ))}
                    </div>
                )}
            </main>
            <Footer />
        </>
    );
}

export default App;
