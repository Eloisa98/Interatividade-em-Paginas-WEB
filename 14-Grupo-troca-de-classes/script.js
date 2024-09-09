function trocarClasses() {
    const elementosAzuis = document.querySelectorAll('.azul');
    const elementosVermelhos = document.querySelectorAll('.vermelho');

    elementosAzuis.forEach(elemento => {
        elemento.classList.remove('azul');
        elemento.classList.add('vermelho');
    });

    elementosVermelhos.forEach(elemento => {
        elemento.classList.remove('vermelho');
        elemento.classList.add('azul');
    });
}

