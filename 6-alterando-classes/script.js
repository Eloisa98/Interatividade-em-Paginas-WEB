const liElements = document.querySelectorAll('ol > li');

liElements.forEach(item => {
    item.addEventListener('click', function() {
        liElements.forEach(li => {
            li.classList.remove('listaSelecionada');
            li.classList.add('lista');
        });
        
        this.classList.replace('lista', 'listaSelecionada');
    });
});
