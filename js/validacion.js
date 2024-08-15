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

let enviar = document.getElementById('regBtn');
enviar.addEventListener("click", function() {
    TodosLosCamposCompletos();
});