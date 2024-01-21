const form = document.getElementById('form-comparacao')

let numeroA = document.getElementById('numero-a')
let numeroB = document.getElementById('numero-b')

function compara(numA, numB){
    let comparacao = false
    comparacao = numB.value > numA.value
    return comparacao;
};

form.addEventListener('submit', function(e){
    e.preventDefault()
    let bEhMaior = compara(numeroA, numeroB)
    
    if (numeroA.value != '' && numeroB.value != ''){
        if(bEhMaior){
            const msgSucesso = `Muito bem! ${numeroB.value} é maior do que ${numeroA.value}!`

            numeroA.classList.remove('error')
            numeroB.classList.remove('error')

            document.querySelector('#msg-invalido').style.display = 'none';

            document.querySelector('#msg-sucesso').innerHTML = msgSucesso;
            document.querySelector('#msg-sucesso').style.display = 'block';

            numeroA.value = null
            numeroB.value = null
        } else{
            const msgInvalido = 'O valor do campo B precisa ser maior do que o valor do campo A!';

            numeroA.classList.add('error')
            numeroB.classList.add('error')
            
            document.querySelector('#msg-sucesso').style.display = 'none';

            document.querySelector('#msg-invalido').innerHTML = msgInvalido;
            document.querySelector('#msg-invalido').style.display = 'block';
        }
    }
});
