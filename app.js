// Массив для хранения задач
let tasks = [];

// Функция для добавления задачи
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push(taskText);
    taskInput.value = '';
    renderTasks();
  }
}

// Функция для удаления задачи
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Функция для отображения задач
function renderTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
});