function toggleDisplay(pageId) {
    // Páginas que podem ser abertas/fechadas
    var pages = ['page2', 'page3'];

    // Itera sobre as páginas e fechar qualquer uma que não seja a atual
    pages.forEach(function(id) {
        var page = document.getElementById(id);
        if (id !== pageId) {
            page.style.display = 'none';
        }
    });

    // Alterna o display da página clicada
    var currentPage = document.getElementById(pageId);
    currentPage.style.display = (currentPage.style.display === 'none' || currentPage.style.display === '') ? 'block' : 'none';
}
