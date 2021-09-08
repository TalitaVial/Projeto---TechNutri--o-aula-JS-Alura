
var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var tdImc = paciente.querySelector('.info-imc');
tdImc.textContent = imc;

var pesoValido = true;
var alturaValida = true;


if(peso < 0 || peso >= 1000){
  console.log("ivalid");
  pesoValido = false;
  tdImc.textContent = "Peso Inválido";
}

if(altura < 0 || altura >= 3.00){
  console.log("invalid");
  alturaValida = false;
  tdImc.textContent = "Altura Inválida";
}


if(pesoValido && alturaValida){
  var imc = peso / (altura * altura);
  tdImc.textContent = imc;
}

console.log(tdAltura);
console.log(tdPeso);
console.log(imc);
console.log(tdImc)

