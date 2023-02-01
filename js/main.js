const form = document.getElementById('valida-form')
let numA = document.getElementById('numero-a')
let numB = document.getElementById('numero-b')

function validaNumero(numA, numB){
    return numA < numB
}

form.addEventListener('submit', function(e){
    
    let validaForm = false
    e.preventDefault();

const notaA = document.getElementById('numero-a').value;
const notaB = document.getElementById('numero-b').value;
const mensagemSucesso =`O número ${numB.value} é maior que o ${numA.value}.`
const mensagemSucesso2 = `O numero ${numA.value} é maior que o ${numB.value} `

if(notaA < notaB){

    const containerMensagemSucesso = document.querySelector('.mensagem-sucesso')
    containerMensagemSucesso.innerHTML = mensagemSucesso 
    containerMensagemSucesso.style.display = 'block'

    document.getElementById('numero-a').value=''
    document.getElementById('numero-b').value=''

}else{
    const containerMensagemSucesso2 = document.querySelector('.mensagem-sucesso')
    containerMensagemSucesso2.innerHTML = mensagemSucesso2
    containerMensagemSucesso2.style.display = 'block'

    document.getElementById('numero-a').value=''
    document.getElementById('numero-b').value=''
}

})


