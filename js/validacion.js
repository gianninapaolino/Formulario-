function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
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
>>>>>>> 97422d8a7b2d9f8bbbfdf305e87920bf025796a2
