$(document).ready(function(){
    $('cpf').mask('000.000.000-00', {
        placeholder: '__/__/____'
    });

    $('form').validate({
        rules: {
            cpf: {
                required: true,
                cpf: true
            },
            messages: {
                cpf: 'Informe um CPF válido'
            }
        }
    });
})
