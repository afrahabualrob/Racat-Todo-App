// import React, { useContext } from "react";
// import { FormCxt1 } from "../Context1";
// import "./DisplayList.css";
// import { FaTrash, FaCheckCircle } from "react-icons/fa";
// import Dialog from "../Dialog/Dialog";

// export const DisplayList = (props) => {
//   const { todosArray, deleteTask, isShown, markTaskAsDone } =
//     useContext(FormCxt1);

//   return (
//     <div>
//       {todosArray.map((item, index) => (
//         <div className="item" key={index}>
//           <div className="newItem">
//             <p className="box__item taskName"> {item.task}</p>
//             <FaCheckCircle
//               onClick={() => markTaskAsDone(item)}
//               className={
//                 item.isComplete ? "checkCircleCompleted" : "checkCircle"
//               }
//             />
//             <p className="box__item task_desc">{item.assignee}</p>
//             <FaTrash className=" trashIcon" onClick={() => deleteTask(item)} />
//           </div>
//         </div>
//       ))}
//       {isShown && <Dialog />}
//     </div>
//   );
// };
