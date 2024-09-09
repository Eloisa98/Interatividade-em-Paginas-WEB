const button = document.createElement('button');
button.textContent = 'Inserir';

button.addEventListener('click', function() {
    const li = document.createElement('li');
    li.textContent = 'nova entrada';
    
    const lista = document.getElementById('lista');
    lista.append(li);
});

document.body.append(button);
