const addTaskBtn = document.getElementById("addTaskBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteBtn = document.createElement("button");

  span.textContent = taskText;
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete";

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });
}

addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});