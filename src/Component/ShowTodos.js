import { List } from "antd";
import { useSelector } from "react-redux";
export default function ShowTodos() {
  const list = useSelector((state) => state.todos.value);
  console.log(list);

  return (
    <List
      size="small"
      bordered
      dataSource={list}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  );
}
