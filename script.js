document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('.add-task');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const input = form.querySelector('input');
            const taskText = input.value.trim();
            
            if (taskText !== "") {
                const day = form.getAttribute('data-day');
                addTaskToDay(day, taskText);
                input.value = ""; // Limpa o campo de texto
            }
        });
    });
});

function addTaskToDay(day, taskText) {
    const dayList = document.getElementById(`${day}-list`);
    
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    
    taskItem.innerHTML = `
        ${taskText}
        <div>
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Excluir</button>
        </div>
    `;
    
    // Adiciona a nova tarefa ao dia correspondente
    dayList.appendChild(taskItem);
    
    // Adiciona funcionalidades para editar e excluir tarefas
    taskItem.querySelector('.edit-btn').addEventListener('click', () => {
        const newTaskText = prompt("Editar tarefa:", taskText);
        if (newTaskText) {
            taskItem.firstChild.textContent = newTaskText;
        }
    });
    
    taskItem.querySelector('.delete-btn').addEventListener('click', () => {
        dayList.removeChild(taskItem);
    });
}
