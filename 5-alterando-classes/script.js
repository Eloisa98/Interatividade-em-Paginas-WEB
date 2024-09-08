const h1 = document.createElement("h1");
h1.textContent = "Clique aqui";

document.body.appendChild(h1);

h1.addEventListener("click", function() {
    h1.classList.toggle("titulo");
});
