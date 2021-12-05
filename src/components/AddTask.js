import "../styles/AddTask.css";

export const AddTask = ({ addTask }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    let taskInput = event.target.task.value;
    let dateInput = event.target.date.value;
    let reminderInput = event.target.reminder.checked;

    addTask({ task: taskInput, date: dateInput, reminder: reminderInput });

    event.target.task.value = "";
    event.target.date.value = "";
    event.target.reminder.checked = false;
  };

  return (
    <div className="add-task">
      <form onSubmit={handleSubmit}>
        <div style={{ fontSize: "22px" }}>Task</div>
        <input placeholder="Add Task" type="text" name="task" id="text" />
        <div style={{ fontSize: "22px" }}>Day & Time</div>
        <input placeholder="Add Day & Time" name="date" id="text" />
        <div id="reminder" style={{ fontSize: "22px" }}>
          Set Reminder
          <input type="checkbox" name="reminder" />
        </div>
        <button className="save-button" type="submit">
          Save Task
        </button>
      </form>
    </div>
  );
};
