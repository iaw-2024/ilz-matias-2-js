const listaElementos = [
    {id: 1, nombre: 'Pizza'},
    {id: 2, nombre: 'Hamburguesa'},
    {id: 3, nombre: 'Asado'}
]

function crearElemento() {
    const listaElem = document.getElementById('element-list');
    listaElem.innerHTML = '';
    listaElementos.forEach(element => {
        const li = document.createElement('li');
        li.textContent = element.nombre;
        li.classList.add("element");
        listaElem.appendChild(li);
    });
}
document.addEventListener('DOMContentLoaded', crearElemento);