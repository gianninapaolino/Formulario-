document.getElementById('regBtn').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password1 = document.getElementById('password1').value.trim();
    const password2 = document.getElementById('password2').value.trim();
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !apellido || !email || !password1 || !password2) {
        showAlertError();
        return;
    }

    if (password1.length < 6) {
        showAlertError();
        return;
    }

    if (password1 !== password2) {
        showAlertError();
        return;
    }

    if (!terminos) {
        showAlertError();
        return;
    }

    showAlertSuccess();
});