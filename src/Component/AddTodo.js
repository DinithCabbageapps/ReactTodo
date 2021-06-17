import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { gettodos } from "../redux/todoSlice";
import { Button } from "antd";

export default function Addtodo() {
  const dispatch = useDispatch();

  const [Todo, setTodo] = useState("initialState");
  const [test, setTest] = useState([]);

  const handleAdd = () => {
    if (Todo === "") return;
    setTest([...test, Todo]);
    dispatch(gettodos(test));
  };
  return (
    <div>
      <input
        placeholder="Type a message..."
        onChange={(e) => setTodo(e.target.value)}
      />
      <Button type="primary" onClick={handleAdd}>
        AddTodo
      </Button>
    </div>
  );
}
