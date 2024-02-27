const jsonComidas = {
    "listasComidas": [
      {
        "tipo": "Doña Marta",
        "platos": ["sopa ", "ensalada de fruta"],
        "platodefondo": ["arroz chaufa", "arroz con pollo", "lomo saltado"]
      },
      {
        "tipo": "SM Criollo",
        "platos": ["ensalada", "causa"],
        "platodefondo": ["Tallarin verde", "seco de res", "pescado frito"]

      },
      {
        "tipo": "La sazon de la colonial",
        "platos": ["tequeños", "papa a la huancaína"],
        "platodefondo": ["pure con pollo al horno", "Tallarin saltado", "macarrones"]
      }
    ]
  };

  const menusContainer = document.querySelector('.menus-container');

  jsonComidas.listasComidas.forEach(lista => {
      const menuDiv = document.createElement('div');
      menuDiv.classList.add('menus');
      const tipoTitulo = document.createElement('h3');
      tipoTitulo.textContent = lista.tipo.charAt(0).toUpperCase() + lista.tipo.slice(1);
      const platosUl = document.createElement('ul');

      lista.platos.forEach(plato => {
          const platoLi = document.createElement('li');
          platoLi.textContent = "Entrada: " + plato;
          platosUl.appendChild(platoLi);
      });

      const platoFondoUl = document.createElement('ul');
      lista.platodefondo.forEach(plato => {
          const platoLi = document.createElement('li');
          platoLi.textContent = "Segundo : " + plato;
          platoFondoUl.appendChild(platoLi);
      });

      menuDiv.appendChild(tipoTitulo);
      menuDiv.appendChild(platosUl);
      menuDiv.appendChild(platoFondoUl);
      menusContainer.appendChild(menuDiv);
  });


  const registrar = document.querySelector('.registrar');
  const nombre = document.querySelector('#nombrestipo');
  const menu = document.querySelector('#menutipo');
  const entrada1 = document.querySelector('#entrada1');
  const segundoPlato = document.querySelector('#segundoPlato');
  const resultado = document.querySelector('#resultado');
  

 
  registrar.addEventListener('click', () => {
    resultado.innerHTML = `
        <div id="box-com" style="text-align: center;">
            <h2>Boleta de Pedido</h2>
            <p><strong>Nombre:</strong> ${nombre.value}</p>
            <p><strong>Menu:</strong> ${menu.value}</p>
            <p><strong>Entrada:</strong> ${entrada1.value}</p>
            <p><strong>Segundo Plato:</strong> ${segundoPlato.value}</p>
        </div>`;

    
  });