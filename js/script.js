var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

var tdPeso = paciente.querySelector(".info-peso");

var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");

var altura = tdAltura.textContent;

var imc = peso / (altura * altura);

console.log(tdAltura);
console.log(tdPeso);
console.log(imc);


