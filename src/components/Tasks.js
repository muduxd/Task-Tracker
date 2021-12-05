import "../styles/Tasks.css";
import { Task } from "./Task.js";

export const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div className="tasks">
      {tasks.map((element, index) => (
        <Task key={index} task={element.task} date={element.date} reminder={element.reminder} index={index} deleteTask={deleteTask} />
      ))}
    </div>
  );
};
