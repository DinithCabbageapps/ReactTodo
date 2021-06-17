import "antd/dist/antd.css";
import { Menu } from "antd";
import { useState } from "react";
import AddTodo from "./AddTodo";
import ShowTodos from "./ShowTodos";
import { Link, BrowserRouter as Router } from "react-router-dom";
export default function NavBar() {
  const [state, setState] = useState("add");
  function handleClick(e) {
    console.log("click ", e);
    setState(e.key);
    if (e.key === "show") {
      return (
        <div>
          <ShowTodos />
        </div>
      );
    } else {
      return (
        <div id="div1">
          <AddTodo />
        </div>
      );
    }
  }
  return (
    <Menu onClick={handleClick} selectedKeys={state} mode="horizontal">
      <Menu.Item key="add">AddTodo</Menu.Item>
      <Menu.Item key="show">ShowTodos</Menu.Item>
    </Menu>
  );
}
