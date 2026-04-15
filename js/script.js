// elementos do DOM (hyphen-case ids como no anexo)
var taskInput = document.getElementById('task-input');
var prioritySelect = document.getElementById('priority-select');
var addTaskButton = document.getElementById('add-task-button');
var taskList = document.getElementById('task-list');
var taskForm = document.getElementById('task-form');

// Array com objetos de tarefas (começa vazio)
var tasks = [];

// Função para criar uma nova tarefa (retorna o objeto)
function createTask(text, priority) {
    var task = { text: text, priority: priority || 'medium', completed: false };
    tasks.push(task);

    // adiciona no DOM usando innerHTML += (muito simples)
    var label = task.priority === 'high' ? 'Alta' : (task.priority === 'medium' ? 'Média' : 'Baixa');
    taskList.innerHTML += '<li class="task-item cordaprioridade priority-' + task.priority + '">'
        + '<input type="checkbox" onclick="this.parentElement.classList.toggle(\'completed\')"> '
        + '<span class="task-text">' + task.text.replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</span> '
        + '<small class="priority-label">' + label + '</small>'
        + '</li>';

    console.log('Tarefa criada:', task);
    return task;
}

// Evento de submit do formulário (simples)
taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        createTask(taskInput.value, prioritySelect.value);
        taskInput.value = '';
        prioritySelect.value = 'medium';
});
