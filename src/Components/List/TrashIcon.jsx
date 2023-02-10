import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import Dialog from "../Dialog/Dialog";

export const TrashIcon = ({ item }) => {
  const [isShown, setIsShown] = useState(false);

  const deleteTask = () => {
    setIsShown(true);
  };

  return (
    <div>
      <FaTrash className=" trashIcon" onClick={deleteTask} />
      {isShown && (
        <Dialog itemID={item.id} isShown={isShown} setIsShown={setIsShown} />
      )}
    </div>
  );
};
