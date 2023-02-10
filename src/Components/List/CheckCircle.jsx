import React, { useState, useContext, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FormCxt1 } from "../Context1";
import "./CheckCircle.css";

export const CheckCircle = ({ item }) => {
  // const [isComplete, setIsComplete] = useState(item.isComplete);
  const { todos, setTodos } = useContext(FormCxt1);

  const toggleCompleted = () => {
    // console.log(item.isComplete);
    // item.isComplete ? (item.isComplete = false) : (item.isComplete = true);
    // item.isComplete = !item.isComplete;
    // setIsComplete(!item.isComplete);
    const newTodo = todos.map((t) =>
      t.id === item.id ? { ...t, isComplete: !t.isComplete } : t
    );
    console.log(newTodo);
    setTodos(newTodo);

    localStorage.setItem("localTodo", JSON.stringify(newTodo)); //!!!
  };

  // To Change In localStorage....
  // useEffect(() => {
  //   // localStorage.setItem("localTodo", JSON.stringify(todos)); //  !
  //   setTodos(todos);
  // }, [isComplete]);

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <div>
      <FaCheckCircle
        onClick={toggleCompleted}
        className={item.isComplete ? "checkCircleCompleted" : ""}
      />
    </div>
  );
};
