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
        return showAlertError(); 
    }
        else {
        return showAlertSuccess();
    }
    } 

let enviar1 = document.getElementById('regBtn');
enviar1.addEventListener("click", function() {
          TodosLosCamposCompletos()
       })




let enviar = document.getElementById("termino");
enviar.addEventListener("click", function() {
    lucia() })
  
let terminos = document.getElementById("terminos").checked;

function lucia() {
 if (!terminos) {
return showAlertError();
 
} 
 else {
 return showAlertSuccess();
        }
    }





function checkPassword() {
    if (password1.value.length >= 6 && password2.value.length >= 6 && password1.value === password2.value) {
    return showAlertSuccess();
} 
else {
    return showAlertError();

  }
}     
let send2 = document.getElementById('regBtn');

send2.addEventListener("click", function() {
 checkPassword();
});


