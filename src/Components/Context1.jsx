import React, { createContext, useState, useEffect } from "react";
export const FormCxt1 = createContext();
const Context1 = (props) => {
  const [todos, setTodos] = useState([]);
  const value = { todos, setTodos };

  return (
    <div>
      <FormCxt1.Provider value={value}>{props.children}</FormCxt1.Provider>
    </div>
  );
};
export default Context1;