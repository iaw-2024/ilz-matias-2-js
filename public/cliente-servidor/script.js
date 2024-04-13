document.addEventListener('DOMContentLoaded', () => {
    fetch('/cliente-servidor')
      .then(response => response.json())
      .then(data => {
        const alimentosList = document.getElementById('alimentos-list');
        data.forEach(alimento => {
          const listItem = document.createElement('li');
          listItem.textContent = alimento.nombre;
          alimentosList.appendChild(listItem);
        });
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  });