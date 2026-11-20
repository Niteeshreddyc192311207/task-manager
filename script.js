let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="${task.completed ? "completed" : ""}">${task.text}</span>
      <div>
        <button onclick="completeTask(${index})">✔</button>
        <button onclick="deleteTask(${index})">❌</button>
      </div>
    `;
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push({ text: text, completed: false });
  input.value = "";
  showTasks();
}

function completeTask(index) {
  tasks[index].completed = !tasks[index].completed;
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

showTasks();
