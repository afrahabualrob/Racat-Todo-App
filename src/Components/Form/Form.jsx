import React, { useState, useEffect, useContext } from "react";
import { Input } from "../Input";
import { AddButton } from "./AddButton/AddButton";
import { FormCxt1 } from "../Context1";
import "./Form.css";
import { FaPlus } from "react-icons/fa";

export default function Form() {
  const [inputTask, setInputTask] = useState("");
  const [inputAssignee, setInputAssignee] = useState("");
  const { todos, setTodos } = useContext(FormCxt1);

  const handleTask = (e) => {
    setInputTask(e.target.value);
    console.log("e.target.value");
  };

  const handleAssignee = (e) => {
    setInputAssignee(e.target.value);
    console.log("e.target.value");
  };

  const HandleSubmit = (e) => {
    console.log("Submit..");
    e.preventDefault();
    saveTaskAtLocalStotage();
    resetInputValues();
  };

  // bring todo from LocalStorage ...
  const localStorageChandges = localStorage.getItem("localTodo");
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("localTodo"));
    if (todos) setTodos(todos);
  }, [localStorageChandges]);

  const saveTaskAtLocalStotage = () => {
    let newTask = {
      id: Math.floor(Math.random() * 10000),
      inputTask,
      inputAssignee,
      isComplete: false,
    };

    setTodos([...todos, newTask]);

    localStorage.setItem("localTodo", JSON.stringify([...todos, newTask]));
  };

  useEffect(() => {
    try {
      if (localStorage.getItem("localTodo")) {
        const todosArray = JSON.parse(localStorage.getItem("localTodo"));
        console.log(todosArray);
        setTodos(todosArray);
      }
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }, []);

  const resetInputValues = () => {
    setInputTask("");
    setInputAssignee("");
  };

  return (
    <>
      <form className="form">
        <div className="display__Flex">
          <Input placeholder="Task" value={inputTask} onChange={handleTask} />
          <Input
            placeholder="Assignee"
            value={inputAssignee}
            onChange={handleAssignee}
          />
        </div>
        <div className="display__Flex">
          <div className="addd">
            <AddButton
              value="ADD New Task "
              onClick={HandleSubmit}
              disabled={!inputTask || !inputAssignee}
            />
          </div>
        </div>
      </form>
    </>
  );
}
