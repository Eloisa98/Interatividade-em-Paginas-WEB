function verificarNota(botao) {
    const linha = botao.closest('tr');

    const notaElement = linha.querySelector('.nota');
    const nota = parseFloat(notaElement.textContent);

    if (nota >= 5) {
        linha.classList.add('bg-verde');
        linha.classList.remove('bg-vermelho');
    } else {
        linha.classList.add('bg-vermelho');
        linha.classList.remove('bg-verde');
    }
}
