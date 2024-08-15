function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

const nombre = document.getElementById('nombre').value;
const apellido = document.getElementById('apellido').value;
const email = document.getElementById('email').value;
const password1 = document.getElementById('password1').value;
const password2 = document.getElementById('password2').value;
const terminos = document.getElementById('terminos').checked;

}

function checkPassword() {
    if (password1.value.length >= 6 && password2.value.length >= 6 && password1.value === password2.value) {
    return showAlertSuccess();
} 
else {
    return showAlertError();

  }
}     

