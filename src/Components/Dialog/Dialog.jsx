import React, { useContext, useEffect } from "react";
import { FormCxt1 } from "../Context1";
import "./Dialog.css";

export default function Dialog({ itemID, isShown, setIsShown }) {
  const { todos, setTodos } = useContext(FormCxt1);

  const handleCancel = () => {
    setIsShown(!isShown);
  };

  const handleDelete = () => {
    const todosAfterDeleted = todos.filter((todo) => todo.id !== itemID);
    setTodos(todosAfterDeleted);
    localStorage.setItem("localTodo", JSON.stringify(todosAfterDeleted)); //    !!!!
    console.log(todos);
    handleCancel();
  };

  return (
    <div>
      <div className="dialog_section">
        <div id="dialog">
          <p>Are you sure Delete This Task {isShown}</p>
          <button
            className="cancel_buuton"
            id="cancel__dialog"
            onClick={handleCancel}
          >
            Cancle
          </button>
          <button
            className="delete_buuton"
            id="delete__dialog"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
