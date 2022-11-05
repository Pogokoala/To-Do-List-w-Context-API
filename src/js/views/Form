import React from "react";
import { FaLeaf } from "react-icons/fa";

export const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const todoHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setTodos([
          ...todos,
          { text: inputText, completed: false, id: Math.random() * 1000 },
        ]);
        setInputText("");
      };
      return (
        <form>
          <input
            onChange={todoHandler}
            value={inputText}
            type="text"
            className="todoInput"
          />
          <button onClick={submitHandler} className="addButton" type="submit">
            <span><FaLeaf /></span>
          </button>
        </form>
    );
};
