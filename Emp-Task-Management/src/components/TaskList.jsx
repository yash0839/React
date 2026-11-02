import React, { useState } from 'react';

function TaskList() {

  const [tasks, setTasks] = useState([
    { name: "Task 1", status: "done" },
    { name: "Task 2", status: "not done" },
    { name: "Task 3", status: "done" }
  ]);

  const toggleStatus = (index) => {

    const updatedTasks = tasks.map((task, i) => {

      if (i === index) {
        return {
          ...task,
          status: task.status === "done" ? "not done" : "done"
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="container py-5">

      <div className="card shadow border-0 mx-auto" style={{ maxWidth: "700px" }}>

        <div className="card-header bg-dark text-white text-center py-3">
          <h2 className="mb-0">Employee Task Management</h2>
        </div>

        <div className="card-body p-4">

          {tasks.map((task, index) => (

            <div className="card mb-3 border" key={index}>

              <div className="card-body d-flex justify-content-between align-items-center flex-wrap gap-3">

                <div>
                  <h5 className="mb-2">{task.name}</h5>

                  <span className={`badge ${
                    task.status === "done"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}>
                    {task.status}
                  </span>
                </div>

                <button
                  className={`btn ${
                    task.status === "done"
                      ? "btn-warning"
                      : "btn-success"
                  }`}
                  onClick={() => toggleStatus(index)}
                >
                  Toggle Status
                </button>

              </div>

            </div>

          ))}

        </div>

        <div className="card-footer text-center bg-light">
          <p className="mb-0 text-muted">
            Total Tasks: {tasks.length} |
            Completed: {tasks.filter(task => task.status === "done").length}
          </p>
        </div>

      </div>

    </div>
  );
}

export default TaskList;