var pacientes = document.querySelectorAll('.paciente');
console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {

  console.log(pacientes[i]);

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');

  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');

  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');
  tdImc.textContent = imc;

  var pesoValido = true;
  var alturaValida = true;

  if (peso < 0 || peso >= 1000) {
    console.log('ivalid');
    pesoValido = false;
    tdImc.textContent = 'Peso Inválido';
  }

  if (altura < 0 || altura >= 3) {
    console.log('invalid');
    alturaValida = false;
    tdImc.textContent = 'Altura Inválida';
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
