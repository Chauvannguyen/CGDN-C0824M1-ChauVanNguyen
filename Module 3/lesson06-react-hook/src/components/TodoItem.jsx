const TodoItem = ({ id, title, completed, handleTaskChecked }) => {
    return (
        <div className="todo-item">
            <div>
                <input
                    type="checkbox"
                    name="title"
                    checked={completed}
                    onChange={() => handleTaskChecked(id)}
                />
                <span className={completed && 'completed'}>{title}</span>
            </div>
            <div className="todo-actions">
                <button className="btn-delete">X</button>
            </div>
        </div>
    );
};

export default TodoItem;