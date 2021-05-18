import { useState } from "react";

const AddTodo = (props) => {
  const [input, setInput] = useState("");

  return (
    <div>
      <input
        placeholder="Add a todo!"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button
        onClick={() => {
          props.addTodo(input);
          setInput("");
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
