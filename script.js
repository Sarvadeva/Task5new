function addTask() {
  const taskInput = document.getElementById('taskInputField');
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const taskList = document.getElementById('taskList');
    const newTask = document.createElement('div');
    newTask.textContent = taskText;
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}
