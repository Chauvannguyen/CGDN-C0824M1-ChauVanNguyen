import { useState } from 'react';

export default function TodoForm({ handleSubmit }) {
    const [task, setTask] = useState('HTML');

    return (
        <form onSubmit={(e) => handleSubmit(e, task)}>
            <input
                type="text"
                name="task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button>Add</button>
        </form>
    );
}