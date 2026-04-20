const API_URL = "http://localhost:5000/api/tasks";

// READ
async function fetchTasks() {
  const res = await fetch(API_URL);
  const tasks = await res.json();

  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <input class="task-title" id="title-${task._id}" value="${task.title}" />

      <select id="status-${task._id}">
        <option value="pending" ${task.status === "pending" ? "selected" : ""}>Pending</option>
        <option value="completed" ${task.status === "completed" ? "selected" : ""}>Completed</option>
      </select>

      <div class="task-actions">
        <button class="update-btn" onclick="updateTask('${task._id}')">Update</button>
        <button class="delete-btn" onclick="deleteTask('${task._id}')">Delete</button>
      </div>
    `;

    list.appendChild(li);
  });
}

// CREATE
async function addTask() {
  const input = document.getElementById("taskInput");

  if (!input.value) return alert("Enter task");

  await fetch(API_URL, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: input.value,
      status: "pending"
    })
  });

  input.value = "";
  await fetchTasks();
}

// UPDATE
async function updateTask(id) {
  const title = document.getElementById(`title-${id}`).value;
  const status = document.getElementById(`status-${id}`).value;

  await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ title, status })
  });

  await fetchTasks();
}

// DELETE
async function deleteTask(id) {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  await fetchTasks();
}

// Load initially
fetchTasks();
