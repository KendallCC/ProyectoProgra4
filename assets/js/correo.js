function CalcularEdad() {
  const fechaNacimientoInput = document.getElementById("Fecha").value;
  const frmEdad = document.getElementById("Edad");

  // Crear objeto fecha de nacimiento con Moment.js
  const fechaNacimiento = moment(fechaNacimientoInput, "YYYY-MM-DD");

  // Crear objeto fecha actual con Moment.js
  const fechaActual = moment();

  // Calcular edad en años
  const edad = fechaActual.diff(fechaNacimiento, "years");

  // Mostrar edad en la consola
  frmEdad.value = edad;
}

function Evaluar() {
  const generos = document.getElementById("Genero");
  if (generos.value == "Seleccione una opcion"){
    return false;
  }else{
    return true
  }
}

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  if (Evaluar()) {
    btn.value = "Enviando...";

    const serviceID = "default_service";
    const templateID = "template_71jdn3s";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    );
  } else {
    alert("Rellene todos los campos");
  }
});
