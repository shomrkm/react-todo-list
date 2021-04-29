import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  width: "400px",
  height: "30px",
  padding: "8px",
  margin: "8px",
  borderRadius: "8p"
};

export const InputTask = (props) => {
  const { task, onChange, onClick } = props;
  return (
    <div style={style} className="input-area">
      <input placeholder="input task." value={task} onChange={onChange} />
      <button onClick={onClick}>Add</button>
    </div>
  );
};
