function soma(){
 var numero = document.getElementById("n1").valueAsNumber
 var numero2 = document.getElementById("n2").valueAsNumber
var resposta = document.getElementById("respSOMA")

resposta.textContent = numero + numero2
//  console.log(numero, numero2)
}


function sub(){
    
    var numero = parseFloat(document.getElementById("s1").value)
    var numero2 = parseFloat(document.getElementById("s2").value)
    var resposta = document.getElementById("respSub")
resposta.textContent = numero - numero2
}

function multi(){
    var number1 = parseFloat(document.getElementById("n5").value)
    var number2 = parseFloat(document.getElementById("n6").value)
    document.getElementById("respMulti").textContent = number1 * number2

}
function div(){
    var a = parseFloat(document.getElementById("n7").value)
     var b = parseFloat(document.getElementById("n8").value)
     var resp = document.getElementById("respDiv")

     if(b !== 0){
        resp.innerHTML =(a / b).toFixed(2)
     }else{
        resp.innerHTML = "nao se divide por 0"
     }
}