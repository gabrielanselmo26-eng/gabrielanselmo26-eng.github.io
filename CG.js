function scrollToSection(id){
    document.getElementById(id)
    .scrollIntoView({
        behavior:"smooth"
    });
}

function analisarPlantacao(){

    const resultado =
    document.getElementById("resultado");

    const analises = [

        "✅ Plantação saudável",

        "⚠ Baixa umidade detectada",

        "⚠ Possível risco de seca",

        "⚠ Risco de pragas identificado",

        "✅ Condições ideais para cultivo"

    ];

    const sorteio =
    Math.floor(Math.random() *
    analises.length);

    resultado.innerHTML =
    analises[sorteio];
}

document
.getElementById("formulario")
.addEventListener("submit",
function(event){

event.preventDefault();

let nome =
document.getElementById("nome").value;

let email =
document.getElementById("email").value;

let telefone =
document.getElementById("telefone").value;

let mensagem =
document.getElementById("mensagem").value;

if(
nome === "" ||
email === "" ||
telefone === "" ||
mensagem === ""
){
    alert("Preencha todos os campos.");
    return;
}

alert("Mensagem enviada com sucesso!");

this.reset();

});