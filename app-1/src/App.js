import "./App.css";
import List from "./components/List";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

function App() {
  const [todos, setTotos] = useState([]);

  const addTodo = (newTodo) => {
    setTotos([...todos, newTodo]);
  };

  return (
    <div>
      <AddTodo addTodo={addTodo}></AddTodo>
      <List todos={todos}></List>
    </div>
  );
}

export default App;
