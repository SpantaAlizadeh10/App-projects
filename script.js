// script.js

// انتخاب المان‌ها
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const columns = document.querySelectorAll(".tasks");

// افزودن وظایف جدید
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskElement = createTaskElement(taskText);
  document.querySelector("#todo .tasks").appendChild(taskElement);

  taskInput.value = ""; // پاک کردن ورودی
});

// ساخت المان وظیفه
function createTaskElement(text) {
  const task = document.createElement("div");
  task.classList.add("task");
  task.textContent = text;

  // افزودن قابلیت Drag and Drop
  task.setAttribute("draggable", "true");
  task.addEventListener("dragstart", () => task.classList.add("dragging"));
  task.addEventListener("dragend", () => task.classList.remove("dragging"));

  return task;
}

// مدیریت قابلیت Drag and Drop
columns.forEach((column) => {
  column.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggingTask = document.querySelector(".dragging");
    column.appendChild(draggingTask);
  });
});
