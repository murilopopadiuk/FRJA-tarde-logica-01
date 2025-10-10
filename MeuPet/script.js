function mostre(){
    var nome = document.getElementById("nome").value
    var anim = document.getElementById("anim").value
    var idade = parseFloat(document.getElementById("idade")).value
    var raca = document.getElementById("raca").value
    var nacio = document.getElementById("nacio").value


    console.log(typeof nome, typeof anim, typeof idade, typeof raça, typeof nacio)

}


var a = document.getElementById("printNome")
var b = document.getElementById("printAnim")
var c = document.getElementById("printIdade")
var d = document.getElementById("printRaca")
var e = document.getElementById("printNacio")

a.textContent = nome
b.textContent = anim
c.textContent = idade
d.textContent = raca
e.textContent = nacio