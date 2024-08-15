function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function checkPassword() {
    if (password1.value.length >= 6 && password2.value.length >= 6) {
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
