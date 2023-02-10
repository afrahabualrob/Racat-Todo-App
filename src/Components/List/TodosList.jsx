import React, { useContext, useState, useEffect } from "react";
import { TodoItem } from "./TodoItem";
import { FormCxt1 } from "../Context1";
import { Input } from "../Input";
import { TodosCounter } from "../TodosCounter/TodosCounter";
import './TodosList.css';


export const TodosList = () => {
  const { todos, setTodos } = useContext(FormCxt1);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const [taskSearched, setTaskSearched] = useState("");
  const chandleSaveValueOfSearch = (e) => {
    setTaskSearched(e.target.value);
  };
  
  const handleSearchForTask = () => {
    taskSearched === ""
      ? setFilteredTodos(todos)
      : setFilteredTodos(
          todos.filter((todo) =>
            todo.inputTask.toLowerCase().includes(taskSearched.toLowerCase())
          )
        );
  };

  useEffect(() => {
    setFilteredTodos(JSON.parse(localStorage.getItem("localTodo")));
    console.log("loaded");
  }, []);

  useEffect(() => setFilteredTodos(todos), [todos]);

  return (
    <div>
      <div className="center">
        <Input
          placeholder="Search "
          value={taskSearched }
          onChange={chandleSaveValueOfSearch}
          onkeyup={handleSearchForTask}
        />
      </div>

      <div>
        {filteredTodos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
      </div>
      <TodosCounter todos={todos} setTodos={setTodos} />
    </div>
  );
};
