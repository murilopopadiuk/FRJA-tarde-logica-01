function soma(){
 var numero = document.getElementById("n1").valueAsNumber
 var numero2 = document.getElementById("n2").valueAsNumber
var resposta = document.getElementById("respSOMA")

resposta.textContent = numero + numero2
//  console.log(numero, numero2)
}


function sub(){
    
    var numero = document.getElementById("s1").valueAsNumber
    var numero2 = document.getElementById("s2").valueAsNumber
    var resposta = document.getElementById("respSub")
resposta.textContent = numero - numero2
}

