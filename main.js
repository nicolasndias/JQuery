$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){        
        e.preventDefault();

        const novaTarefa = $('#Nova-tarefa').val();

        const novoItem = $('<li type="checkbox"></li>');

        $(`<div class="Tarefa">${novaTarefa}</div>`).appendTo(novoItem);
        
        $(novoItem).appendTo('ul');

        $(novoItem).fadeIn(5000);

        // Limpar o campo após adicionar a tarefa
        $('#Nova-tarefa').val('');
    })
// Adiciona riscado ao clicar na tarefa
$('ul').on('click', 'li .Tarefa', function() {
    $(this).toggleClass('riscado');
});
})