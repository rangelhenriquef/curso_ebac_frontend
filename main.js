$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        
        const tarefa = $('#nova-tarefa').val();
        const novaTarefa = $('<li></li>');

        $(`<h3>${tarefa}</h3>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');

        $('form input').val(null);
    });

    // Marca uma tarefa como concluída 
    $(document).on('click', 'li', function(){
        $(this).addClass('checked');
    });

    // Desmarca uma tarefa como concluída
    $(document).on('click', 'li', function(){
        $(this).toggleClass('unchecked');
    });
});
