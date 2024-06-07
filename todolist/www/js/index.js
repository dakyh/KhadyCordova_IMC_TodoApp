function ajouterTache() {
    const taskInput = document.getElementById('task');
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');

    if (taskInput.value) {
        const newTaskItem = document.createElement('li');
        newTaskItem.innerHTML = taskInput.value;
        const lineBreak = document.createElement('br');

        // Gestionnaire d'événement pour le balayage vers la droite
        $(newTaskItem).on('swiperight', function () {
            $(this).toggleClass('terminer');
            if ($(this).hasClass('terminer')) {
                taskListDone.appendChild(this);
            } else {
                taskList.appendChild(this);
            }
            $(taskList).listview('refresh');
            $(taskListDone).listview('refresh');
        });

        // Gestionnaire d'événement pour le balayage vers la gauche
        $(newTaskItem).on('swipeleft', function () {
            $(this).hide('slow', function () {
                $(this).remove();
            });
        });

        taskList.appendChild(newTaskItem);
        $(taskList).listview('refresh');
        taskInput.value = '';
    }
}

function reinitialiser() {
    const taskList = document.getElementById('taskList');
    const taskListDone = document.getElementById('taskListDone');
    taskList.innerHTML = '';
    taskListDone.innerHTML = '';
}