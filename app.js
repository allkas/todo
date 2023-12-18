// Массив для хранения задач
var tasks = [];

// Функция для добавления задачи
function addTask() {
  let taskInput = document.getElementById('taskInput');
  let taskText = taskInput.value.trim();

  if (taskText !== '') {
    tasks.push({ text: taskText, isEditing: false });
    taskInput.value = '';
    renderTasks();
  }
}

// Функция для удаления задачи
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Функция для редактирования задачи
function editTask(index) {
  tasks[index].isEditing = true;
  renderTasks();
}

// Функция для сохранения отредактированной задачи
function saveTask(index, newText) {
  tasks[index].text = newText;
  tasks[index].isEditing = false;
  renderTasks();
}

// Функция для отмены редактирования задачи
function cancelEdit(index) {
  tasks[index].isEditing = false;
  renderTasks();
}

// Функция для отображения задач
function renderTasks() {
  let taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  tasks.forEach(function(task, index) {
    var li = document.createElement('li');

    if (task.isEditing) {
      // Форма для редактирования задачи
      li.innerHTML = `
        <input type="text" value="${task.text}" id="editInput${index}">
        <button onclick="saveTask(${index}, document.getElementById('editInput${index}').value)">Save</button>
        <button onclick="cancelEdit(${index})">Cancel</button>
      `;
    } else {
      // Показ задачи
      li.innerHTML = `
        <span>${task.text}</span>
        <button onclick="deleteTask(${index})">Delete</button>
        <button onclick="editTask(${index})">Edit</button>
      `;
    }

    taskList.appendChild(li);
  });
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  renderTasks();
});
