document.addEventListener('DOMContentLoaded', () => {
    // DOM selection
// 1. Select elements from the DOM
const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// 2. Define the function that adds a task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = ""; // Clear the input field
    }
}
// 3. Add the event listener to the button
addTaskBtn.addEventListener("click", addTask);
    // Function to add a task
    function addTask() {
        if (taskText === null) {
            taskText = taskInput.value.trim();
        }
        if (taskText === '') return;
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = ''; // Clear the input
        if (save) {
            saveTasks();
        }
    }
    // Event listeners
    addTaskBtn.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);

    taskInput.value = ''; // Clear the input
}

// Event listener
addTaskBtn.addEventListener('click', addTask);
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }
        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        removeBtn.onclick = () => {
            li.remove();
            saveTasks();
        };
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
        if (save) {
            saveTasks();
        }
    }
    // Event listeners
    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
    loadTasks();
});
