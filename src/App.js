import "./App.css";
import AddTodo from "./Component/AddTodo";
import ShowTodos from "./Component/ShowTodos";
import NavBar from "./Component/Navbar";
function App() {
  return (
    <div className="App">
      <NavBar />
  
        <AddTodo />

   
        <ShowTodos />

    </div>
  );
}

export default App;
