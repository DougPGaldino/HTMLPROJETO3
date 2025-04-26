function validarEmail() {
    var email = document.getElementById('email').value;
    var emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailValido.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return false;
    }
    return true;
}

var formulario = document.getElementById('contact-form');
formulario.onsubmit = function () {
    return validarEmail();
};
