document.addEventListener('DOMContentLoaded', () => {
  loadTasks();

  document.getElementById('addTaskBtn').addEventListener('click', () => {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    if (taskText !== '') {
      addTask(taskText);
      input.value = '';
    }
  });
});

function addTask(taskText, save = true) {
  const li = document.createElement('li');
  li.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.classList.add('remove-btn');

  removeBtn.addEventListener('click', () => {
    li.remove();
    removeFromStorage(taskText);
  });

  li.appendChild(removeBtn);
  document.getElementById('taskList').appendChild(li);

  if (save) {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(taskText);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  storedTasks.forEach(task => addTask(task, false));
}

function removeFromStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
