const form = document.getElementById('valida-form')
let numA = document.getElementById('numero-a')
let numB = document.getElementById('numero-b')

function validaNumero(numA, numB){
    return numA < numB
}

form.addEventListener('submit', function(e){
    
    let validaForm = false
    e.preventDefault();

validaForm = validaNumero(numA.value, numB.value)

if(validaForm){

    alert('Certo')

    numA.value = ''
    numB.value = ''

}else{
    alert('Errado')
}

})


