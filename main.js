$(document).ready(function() {
    $('#form-tarefas').submit(function(event) {
        event.preventDefault();

        var taskName = $('#tarefa').val().trim();

        if (taskName) {
            var taskItem = $('<li></li>').text(taskName);
            var removeButton = $('<button class="remove-btn">Remover</button>');

            removeButton.click(function() {
                $(this).parent().remove();
            });

            taskItem.append(removeButton);
            $('#tarefas').append(taskItem);
            $('#tarefa').val('');
        }
    });

    $('#tarefas').on('click', 'li', function(event) {
        if (!$(event.target).is('.remove-btn')) {
            $(this).toggleClass('completed');
        }
    });

    $('#limpar').click(function() {
        $('#tarefas').empty();
    });
});
