function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
let passw1 = document.getElementById("password1")
let passw2 = document.getElementById("password2")

function mensajeAceptar() {

if (passw1 === passw2) { 
   console.log (showAlertSuccess());
}
  else  {

     console.log (showAlertError());
 }
}
