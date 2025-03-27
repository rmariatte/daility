// Função para adicionar tarefa
// Função para adicionar uma tarefa
function addTask(day, taskDescription) {
  const taskList = document.getElementById(day);
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const taskText = document.createElement("span");
  taskText.textContent = taskDescription;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.onclick = function() {
    taskList.removeChild(taskItem);
  };

  const editButton = document.createElement("button");
  editButton.textContent = "Editar";
  editButton.onclick = function() {
    const newTaskDescription = prompt("Edite a tarefa:", taskText.textContent);
    if (newTaskDescription) {
      taskText.textContent = newTaskDescription;
    }
  };

  taskItem.appendChild(taskText);
  taskItem.appendChild(editButton);
  taskItem.appendChild(deleteButton);
  taskList.appendChild(taskItem);
}

// Função que gerencia a adição de tarefas via input
document.querySelectorAll(".add-task").forEach((form) => {
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    const day = form.getAttribute("data-day");
    const taskInput = form.querySelector("input");
    const taskDescription = taskInput.value;

    if (taskDescription) {
      addTask(day, taskDescription);
      taskInput.value = ""; // Limpa o campo de entrada após adicionar a tarefa
    }
  });
});
