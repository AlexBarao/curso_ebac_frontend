const form = document.getElementById('formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoA = Number(document.getElementById('campo-a').value);
    const campoB = Number(document.getElementById('campo-b').value);
    let formEValido = false;
    const mensagemSucesso = `Sucesso! O valor de B (<b>${campoB}</b>) é maior que o valor de A (<b>${campoA}</b>)`;
    const mensagemError = `Incorreto! O valor de B (<b>${campoB}</b>) é menor que o valor de A (<b>${campoA}</b>)`;

    function validaNumero(campoA, campoB){
        return campoA < campoB;
    }

        const containerMensagemSucesso = document.querySelector('.success-message');
        const containerMensagemError = document.querySelector('.error-message');
    formEValido = validaNumero(campoA, campoB);
    if (formEValido) {
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        containerMensagemError.style.display = 'none';
        
    }
    else {
        containerMensagemError.innerHTML = mensagemError;
        containerMensagemError.style.display = 'block';
        containerMensagemSucesso.style.display = 'none';

    }
});