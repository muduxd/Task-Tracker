import "../styles/Task.css";

export const Task = ({ task, date, reminder, index, deleteTask }) => {
  return (
    <div className="task" style={{ borderLeft: reminder ? "5px solid red" : "3px solid black" }}>
      <div className="upper-task">
        {task}
        <button className="remove-button" onClick={() => deleteTask(index)}>
          X
        </button>
      </div>
      <div>{date}</div>
    </div>
  );
};
