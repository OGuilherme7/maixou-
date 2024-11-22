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

    //Inicializando o armazenamento caso o mesmo não exista
    if (!localStorage.getItem('usuarios')) {
        localStorage.setItem('usuarios', JSON.stringify([]));
    }

    const usuarios = obterUsuariosBD();

    const usuarioExiste = usuarios.find(usuario => {
        return usuario.email === usuarioAtual.email;
    })

    console.log(usuarioExiste)

    if (usuarioExiste) {
        spanErros.innerText = 'Email já cadastrado';
    } else {
        //Deslogando todos usuários
        usuarios.forEach(usuario => {
            usuario.login = false;
        })  

        usuarios.push({...usuarioAtual, login: true });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        console.log('Usuario cadastrado!\nChave usuarios: ' + localStorage.getItem('usuarios'));
    }

});

function obterUsuariosBD () {
    return JSON.parse(localStorage.getItem('usuarios'));
}


