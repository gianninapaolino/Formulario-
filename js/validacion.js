function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");

}

function checkPassword() {
    if (password1.length >= 6 && password2.length >= 6) {
    return showAlertSuccess();
} 
else {
    return showAlertError();

  }
}     

