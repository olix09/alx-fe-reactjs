import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import TodoTitle from "./components/todo.jsx";
import TodoList from "./components/TodoList.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TodoTitle />
      <TodoList task="learn Asap Frotend " />
      <TodoList task="learn dsgfhjvb " />
      <TodoList task="learn Adsgdfhfgdfhend " />
      <TodoList task="learn Asap fdsgalkdjgfFrotend " />
    </>
  );
}

export default App;
