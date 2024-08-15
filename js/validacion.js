function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

let enviar = document.getElementById("regBtn");
enviar.addEventListener("click", function(event) {
  
let terminos = document.getElementById("terminos").checked;

 if (!terminos) {
showAlertError('Debe aceptar los términos y condiciones del servicio.');
 event.preventDefault(); 
} 
 else {
  showAlertSuccess();
        }
    });