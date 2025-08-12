const btnHamburguer = document.getElementById('btnHamburguer');
const menuHamburguer = document.querySelector('nav.menuHamburguer');
const btnFecharMenu = document.getElementById('btnFecharMenu');

const btnAbrirModal = document.getElementById('btnAbrirModal');
const modalForm = document.getElementById('modalForm');
const modalConfirmacao = document.getElementById('modalConfirmacao');

// Abrir o menu lateral
btnHamburguer.addEventListener('click', () => {
  menuHamburguer.classList.add('aberto');
});

// Fechar o menu lateral
btnFecharMenu.addEventListener('click', () => {
  menuHamburguer.classList.remove('aberto');
});

// Abrir modal de formulário e fechar o menu (se aberto)
btnAbrirModal.addEventListener('click', () => {
  if(menuHamburguer.classList.contains('aberto')) {
    menuHamburguer.classList.remove('aberto');
  }
  modalForm.showModal();
});

// Fechar modais ao clicar no botão fechar
document.querySelectorAll('dialog .fechar').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('dialog').close();
  });
});

// Função que será chamada ao enviar o formulário
document.getElementById('formContato').addEventListener('submit', (e) => {
  e.preventDefault(); // evita envio real, só para demonstração

  // Fechar modal do formulário
  modalForm.close();

  // Mostrar modal de confirmação
  modalConfirmacao.showModal();

  // Opcional: limpar o formulário após envio
  e.target.reset();
});