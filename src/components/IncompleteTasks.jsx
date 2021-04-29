import React from "react";

export const IncompleteTasks = (props) => {
  const { tasks, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">On-going Tasks</p>
      <ul>
        {tasks.map((task, index) => {
          return (
            <div key={index} className="list-row">
              <li>{task}</li>
              <button onClick={() => onClickComplete(index)}>Done</button>
              <button onClick={() => onClickDelete(index)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
