$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: '999.999.999-99'
    })
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(99) 99999-9999'
    })
    $('#cep').mask('00000-000', {
        placeholder: '99999-999'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            cpf: {
                required: true,
                cpf: true
            },
            telefone: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            cpf: 'Digite um CPF válido!',
            telefone: 'Digite um telefone',
            cep: 'CEP inválido ou inexistente'
        }
    });
})
