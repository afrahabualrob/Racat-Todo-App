import "./TodosCounter.css";

export const TodosCounter = ({ todos }) => {
  return (
    <div className="todosCounter">
      <p className="dipaly__Count">
        Number Of Task <span className="countNUm"> {todos.length}</span>
      </p>
      <p className="dipaly__Count">
        Numbet Of Completed Task
        <span className="countNUm">{todos.filter((todo) => todo.isComplete).length}</span>
        
      </p>
    </div>
  );
};
