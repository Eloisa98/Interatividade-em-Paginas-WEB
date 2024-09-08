const button = document.createElement("button");
button.textContent = "inserir";

button.addEventListener("click", function() {
    const h2 = document.createElement("h2");
    h2.textContent = "Inserido";
    document.getElementById("container").appendChild(h2);
});

document.body.appendChild(button);
