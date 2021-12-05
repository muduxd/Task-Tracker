import "../styles/App.css";
import { useState } from "react";
import { AddTask } from "./AddTask";
import { Tasks } from "./Tasks";
import { Footer } from "./Footer";
import { Header } from "./Header";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [addButton, setAddButton] = useState(false);

  const addTask = (task) => {
    setTasks(() => [...tasks, task]);
  };

  const deleteTask = (key) => {
    setTasks(() => tasks.filter((task, index) => index !== key));
  };

  return (
    <div className="app">
      <Header addButton={addButton} setAddButton={setAddButton} />
      {addButton ? <AddTask addTask={addTask} /> : null}
      {tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask} /> : <div style={{ margin: "30px" }}>No Tasks Added</div>}
      <Footer />
    </div>
  );
};

export default App;
