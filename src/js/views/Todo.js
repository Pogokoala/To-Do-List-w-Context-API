import React from "react";


export const Todo = ({ text, todo, todos, setTodos }) => {
    const deleteTodo = () => {
        setTodos(todos.filter((e) => e.id !== todo.id));
    };
    return (
        <div>
            <div className="todo-list">
            <li className="todo-item">{text}</li>
            
        </div>
        <div className="delete-button">
            <button onClick={deleteTodo} className="remove-btn">Done</button>
        </div>
        </div>
        
    );
};
