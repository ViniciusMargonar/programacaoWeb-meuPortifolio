document.addEventListener('DOMContentLoaded', ()=> {
    verificarTema();

})

function verificarTema() {
    const temaArmazenado = localStorage.getItem('tema');
    // Obtém o tema armazenado no localStorage, se houver.

    if(temaArmazenado) {
        document.body.setAttribute('data-tema', temaArmazenado);
        // Se existir um tema armazenado, define o atributo 'data-tema' do corpo do documento com o valor armazenado.
    }
}

function alterarTema() {    
    const tema = document.body.getAttribute('data-tema');
    // Obtém o valor atual do atributo 'data-tema' do corpo do documento.

    const novoTema = tema == 'dark' ? 'light' : 'dark';
    // Determina o novo tema, alternando entre 'dark' e 'light'.

    document.body.setAttribute('data-tema', novoTema);
    // Define o atributo 'data-tema' do corpo do documento com o novo tema.

    localStorage.setItem('tema', novoTema);
    // Armazena o novo tema no localStorage.
}

const buttonContato = document.querySelector('.button-contato');

const modal = document.querySelector('dialog');

const buttonContatoFechar = document.querySelector('.button-contato-fechar');

function mostrarModal() {
    modal.showModal();
}

function fecharModal() {
    modal.close();
}

function copiarDados() {
    const dados1 = document.getElementById('dados1').textContent;
    const dados2 = document.getElementById('dados2').textContent;

    const todosOsDados = `${dados1}\n${dados2}`;
    navigator.clipboard.writeText(todosOsDados);
}
