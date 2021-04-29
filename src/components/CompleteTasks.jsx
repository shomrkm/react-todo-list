import React from "react";

export const CompleteTasks = (props) => {
  const { tasks, onClickUndo } = props;
  return (
    <div className="complete-area">
      <p className="title">Completed Tasks</p>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div key={index} className="list-row">
              <li>{task}</li>
              <button onClick={() => onClickUndo(index)}>Undo</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
