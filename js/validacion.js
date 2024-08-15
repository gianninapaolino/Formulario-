const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const password1 = document.getElementById('password1').value;
const password2 = document.getElementById('password2').value;
const terminos = document.getElementById('terminos').checked;

function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function TodosLosCamposCompletos() {
    if (nombre.value === "" || apellido.value === "" || email.value === "" || password1.value === "" || password2.value === "") {
        return showAlertError(); {
        return showAlertSuccess();
    }
    } 

let enviar = document.getElementById('regBtn');
enviar.addEventListener("click", function() {
          TodosLosCamposCompletos();
       });

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


}


function checkPassword() {
    if (password1.value.length >= 6 && password2.value.length >= 6 && password1.value === password2.value) {
    return showAlertSuccess();
} 
else {
    return showAlertError();

  }
}     


send2.addEventListener("click", function() {
 checkPassword();
});


