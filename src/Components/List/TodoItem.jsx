import React from "react";
import { CheckCircle } from "./CheckCircle";
import { TrashIcon } from "./TrashIcon";
import './todosItem.css'
export const TodoItem = ({ item }) => {

  return (
    <div className="todoItem">
      <p className="task ">{item.inputTask}</p>
      <CheckCircle className="checkCircleIcon" item={item} />
      <p className="assignee">{item.inputAssignee}</p>
      <TrashIcon className="trashIconleIcon" item={item} />
    </div>
  );
};
