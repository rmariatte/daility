// Função para adicionar tarefa
document.getElementById('routineForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const time = document.getElementById('time').value;

    if(task && time) {
        const routineList = document.getElementById('routineList');
        
        const newTask = document.createElement('li');
        newTask.textContent = `${time} - ${task}`;
        
        routineList.appendChild(newTask);
        
        // Limpar os campos
        document.getElementById('task').value = '';
        document.getElementById('time').value = '';
    }
});
