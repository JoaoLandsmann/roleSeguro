function disable() {
    alert('Você não possui idade suficiente para entrar neste site!');

    const buttons = {
        yes: document.getElementById('button-yes'),
        no: document.getElementById('button-no')
    };

    // Desabilita os botões e aplica estilos
    Object.values(buttons).forEach(button => {
        button.disabled = true;
        button.style.transform = "translateY(0)";
    });

    // Estilos específicos para cada botão
    buttons.yes.style.background = "rgba(255,0,0,0.2)";
    buttons.no.style.background = "rgba(0,0,0,0.2)";
}
