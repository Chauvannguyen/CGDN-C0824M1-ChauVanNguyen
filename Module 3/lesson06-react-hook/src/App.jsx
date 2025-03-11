import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';
import Header from './layout/Header';
import Footer from './layout/Footer';
import './assets/styles.css';

function App() {
    const [todos, setTodos] = useState([]);

    function handleSubmit(event, title) {
        event.preventDefault();
        console.log('Submit task', title);
        const obj = {
            id: uuidv4(),
            title: title,
            completed: false,
        };
        console.log(obj);
        // spread
        setTodos([...todos, obj]);
    }

    function handleTaskChecked(id) {
        setTodos([
            ...todos.map((item) => {
                if (item.id === id) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            }),
        ]);
    }

    return (
        <>
            <Header />
            <div>
                <TodoForm handleSubmit={handleSubmit} />
                {todos.length === 0 ? (
                    <p>No data.</p>
                ) : (
                    // TODO render du lieu
                    <div className="container">
                        {todos.map((item) => (
                            <TodoItem
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                completed={item.completed}
                                handleTaskChecked={handleTaskChecked}
                            />
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </>
    );
}

export default App;