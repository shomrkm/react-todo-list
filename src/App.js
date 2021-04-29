import React, { useState } from "react";
import "./styles.css";
import { InputTask } from "./components/InputTask";
import { IncompleteTasks } from "./components/IncompleteTasks";
import { CompleteTasks } from "./components/CompleteTasks";

export const App = () => {
  const [task, setTask] = useState("");
  const [incompleteTasks, setIncompleteTasks] = useState([]);
  const [completeTasks, setCompleteTasks] = useState([]);

  const onChangeTask = (event) => setTask(event.target.value);
  const onClickAdd = () => {
    if (task === "") return;
    const newTasks = [...incompleteTasks, task];
    setIncompleteTasks(newTasks);
    setTask("");
  };
  const onClickDelete = (index) => {
    const tasks = [...incompleteTasks];
    tasks.splice(index, 1);
    setIncompleteTasks(tasks);
  };
  const onClickComplete = (index) => {
    const tasks = [...incompleteTasks];
    tasks.splice(index, 1);
    const newCompletedTasks = [...completeTasks, incompleteTasks[index]];
    setCompleteTasks(newCompletedTasks);
    setIncompleteTasks(tasks);
  };
  const onClickUndo = (index) => {
    const tasks = [...completeTasks];
    tasks.splice(index, 1);
    const newIncompletedTasks = [...incompleteTasks, completeTasks[index]];
    setCompleteTasks(tasks);
    setIncompleteTasks(newIncompletedTasks);
  };

  return (
    <>
      <InputTask task={task} onChange={onChangeTask} onClick={onClickAdd} />
      <IncompleteTasks
        tasks={incompleteTasks}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTasks tasks={completeTasks} onClickUndo={onClickUndo} />
    </>
  );
};
