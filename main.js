$(document).ready(function() {
    

    $('#form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nomeTarefa').val();
        const novaDataTarefa = $('#dataTarefa').val();

        const ulTarefa = $('<ul></ul>');
        const liTarefa = $('<li></li>');

        $(`<p>${novaTarefa}  -  Data: ${novaDataTarefa}</p>`).appendTo(liTarefa);
        $(liTarefa).appendTo(ulTarefa);
        $(ulTarefa).appendTo('#tarefa');

        $('ul li').click(function() {
            $(this).toggleClass('linha-atravessada');
        });
    })
})
