// Seleciona todas as imagens de classe small_img
const imagens = document.querySelectorAll('[class^="small_img"]');
const modal = document.querySelector('.modal');
const modalImg = document.querySelector('#modal_img');
const btClose = document.querySelector('#bt_close');
let srcVal = "";

// Função para abrir o modal com a imagem selecionada
function openModal(img) {
    srcVal = img.getAttribute('src');
    modalImg.setAttribute('src', srcVal);
    modal.classList.toggle('modal_active');
}

// Adiciona event listeners para cada imagem
imagens.forEach(img => {
    img.addEventListener('click', () => openModal(img));
});

// Fecha o modal ao clicar no botão de fechar
btClose.addEventListener('click', () => {
    modal.classList.toggle('modal_active');
});

// Fecha o modal ao pressionar a tecla Escape
document.onkeydown = function(evt) {
    evt = evt || window.event;
    const isEscape = (evt.key === "Escape" || evt.key === "Esc" || evt.keyCode === 27);
    
    if (isEscape) {
        modal.classList.toggle('modal_active');
    }
};
