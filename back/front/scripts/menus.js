const jsonComidas = {
    "listasComidas": [
      {
        "tipo": "menu 1",
        "platos": ["panqueques", "huevos revueltos", "tostadas"],
        "platodefondo": ["ensalada", "sopa", "pollo asado"]
      },
      {
        "tipo": "menu 2",
        "platos": ["ensalada", "sopa", "pollo asado"],
        "platodefondo": ["panqueques", "huevos revueltos", "tostadas"]

      },
      {
        "tipo": "menu 3",
        "platos": ["pescado a la parrilla", "ensalada", "arroz"],
        "platodefondo": ["panqueques", "huevos revueltos", "tostadas"]
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
  const entrada1 = document.querySelector('#entrada1');
  const segundoPlato = document.querySelector('#segundoPlato');
  const resultado = document.querySelector('#resultado');

  registrar.addEventListener('click', () => {
      resultado.innerHTML = `Usted eligió ${entrada1.value} de entradas y ${segundoPlato.value} de segundo plato`;
  });
