const button = document.createElement("button");
button.textContent = "Click Aqui";

const p = document.createElement("p");
p.id = "hidden-text";
p.textContent = "🌟✨ Bem-vindo ao nosso cantinho especial! ✨🌟";

document.body.appendChild(p);
document.body.appendChild(button);

button.addEventListener("click", function() {
    p.style.display = "block";  
    p.classList.add("texto");   
});
