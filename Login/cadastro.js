const spanErros = document.querySelector('#erros');

document.querySelector('#btn-cadastro').addEventListener('click', function (evt) {
    evt.preventDefault();

    const nomeInput = document.querySelector('#nome');
    const emailInput = document.querySelector('#email');
    const senhaInput = document.querySelector('#senha');

    const nome = nomeInput.value;
    const email = emailInput.value;
    const senha = senhaInput.value;

    const usuarioAtual = { nome, email, senha }

    //Inicializano o armazenamento caso o mesmo não exista
    if (localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', '[]');
    }

    const usuarios = getUsersBD();

    usuarios.find(usuario => {
        return usuario.email === usuarioAtual.email;
    })

});

function getUsersBD () {
    return JSON.parse(localStorage.getItem('usuarios'));
}


