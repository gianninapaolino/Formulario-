function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
}

const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const password1 = document.getElementById('password1').value;
const password2 = document.getElementById('password2').value;
const terminos = document.getElementById('terminos').checked;


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
>>>>>>> afa462df0595bd03d8e2492b47f573ce74c2dc3b

}


function checkPassword() {
    if (password1.value.length >= 6 && password2.value.length >= 6 && password1.value === password2.value) {
    return showAlertSuccess();
} 
else {
    return showAlertError();

  }
}     

<<<<<<< HEAD
send2.addEventListener("click", function() {
 checkPassword();
});
>>>>>>> 97422d8a7b2d9f8bbbfdf305e87920bf025796a2
=======
>>>>>>> afa462df0595bd03d8e2492b47f573ce74c2dc3b
