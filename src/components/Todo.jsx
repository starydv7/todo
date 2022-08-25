import React from 'react';
import { useState } from "react";

const Todo = () => {
    const [input, setInput] = useState("");
    const [data, setData] = useState([]);
    const changeData = (e) => {
        setInput(e.target.value);
    };
    const change = () => {
    setData([...data, input]);
    setInput("");
  };
  return (
    <>
      <input type="text" value={input} onChange={(e) => changeData(e)} />
      <button onClick={change}>Add</button>
      {data.map((data) => (
        <li>{data}</li>
      ))}
    </>
  );
}

export default Todo



