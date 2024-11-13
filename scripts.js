document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.innerHTML = `<span>${taskText}</span><span class="delete-btn" onclick="deleteTask(this)">❌</span>`;

  taskList.appendChild(newTask);
  saveTasks();
  taskInput.value = "";
}

function deleteTask(element) {
  element.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const taskList = document.getElementById("taskList");
  const tasks = [];

  for (const item of taskList.children) {
    tasks.push(item.querySelector("span").innerText);
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  for (const task of tasks) {
    const newTask = document.createElement("li");
    newTask.innerHTML = `<span>${task}</span><span class="delete-btn" onclick="deleteTask(this)">❌</span>`;
    taskList.appendChild(newTask);
  }
}
