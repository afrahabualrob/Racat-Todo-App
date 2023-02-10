import React from "react";
import Context1 from "../Context1";
import Form from "../Form/Form";
import { TodosList } from "../List/TodosList";

export const Todo = () => {
  return (
    <div>
      <Context1>
        <Form />
        <TodosList />
      </Context1>
    </div>
  );
};
