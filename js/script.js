 // Aquí tu código
const lista = document.getElementById("lista");
const agregar = document.getElementById("agregar");  

agregar.addEventListener("click", () => {
    const newElement = prompt("Ingrese el nuevo elemento:");
    if (newElement) {
        const li = document.createElement("li");
        li.textContent = newElement;
        lista.appendChild(li);
    }
});

const eliminar = document.getElementById("eliminar");

eliminar.addEventListener("click", () => {
    const lastElement = lista.lastChild;
    if (lastElement) {
        lista.removeChild(lastElement);
    }
});