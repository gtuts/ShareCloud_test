import React from "react";
import { useState } from "react";

export default function TaskTable(props) {
  const [task, setTask] = useState(props.data);

  const [displayForm, setDisplayForm] = useState(false);

  const [newTask, setNewTask] = useState({
    Start: "",
    End: ""
  });

  const createTask = () => {
    setTask([...task, { id: task.length + 1, ...newTask }]);
    setNewTask({ Start: "", End: "" });
    setDisplayForm(false);
  };

  const handleOnChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <table class="table table-striped table-hover mb-1">
        <thead>
          <tr>
            <th scope="col">Task</th>
            <th scope="col">Start date</th>
            <th scope="col">End date</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          {task.map((row) => (
            <tr>
              <th scope="row">{row.id}</th>
              <td>{row.start}</td>
              <td>{row.end}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {displayForm ? (
        <div class="row d-flex align-items-center ms-0">
          <div class="col-2 px-1">
            <input
              id="startDate"
              type="date"
              class="form-control"
              placeholder="start"
              onChange={handleOnChange}
              value={newTask.start}
              name="start"
            />
            <span id="startDateSelected"></span>
          </div>
          <div class="col-2 px-0">
            <input
              id="endDate"
              type="date"
              class="form-control"
              placeholder="end"
              onChange={handleOnChange}
              value={newTask.end}
              name="end"
            />
            <span id="endDateSelected"></span>
          </div>
          <div class="col-2">
            <button
              onClick={createTask}
              type="button"
              class="btn btn-primary mb-1"
            >
              Add Task
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setDisplayForm(!displayForm)}
          type="button"
          class="btn btn-primary ms-1"
        >
          Add Row
        </button>
      )}
    </div>
  );
}
