document.getElementById("regBtn").addEventListener("click", function () {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value;
    const password2 = document.getElementById('password2').value;
    const terminos = document.getElementById('terminos').checked;

    let isValid = true;

    if (!nombre || !apellido || !email || !password1 || !password2) {
        isValid = false;
    }

    if (password1.length < 6) {
        isValid = false;
    }

    if (password1 !== password2) {
        isValid = false;
    }

    if (!terminos) {
        isValid = false;
    }

    if (isValid) {
        showAlertSuccess();
    } else {
        showAlertError();
    }
});

function showAlertSuccess() {
    const alertSuccess = document.getElementById("alert-success");
    alertSuccess.classList.add("show");
    alertSuccess.classList.remove("fade");
}

function showAlertError() {
    const alertError = document.getElementById("alert-danger");
    alertError.classList.add("show");
    alertError.classList.remove("fade");
}
