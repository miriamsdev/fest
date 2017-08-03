const Garages = (update) =>{
    console.log(state.garage);

  const container = $('<section class="container"></section>');
  const row = $('<div class="row">Talleres</div>');
  const ul = $(`<ul class="collapsible" data-collapsible="accordion">
    </ul>`);
  state.garage.forEach((e)=>{
      const li=$(`<li>
            <div class="collapsible-header"><i class="material-icons"></i>${e.nombre}</div>
            <div class="collapsible-body">
                <ul>
                    <li>Dirección: ${e.direccion}</li>
                    <li><a href="#">Teléfono: ${e.telefono}</a></li>
                    <li>Tipo de Taller: ${e.tipo}</li>
                </ul>                          
            </div>
        </li>`);
      ul.append(li);
  });

    row.append(ul);
    container.append(row);
        ul.collapsible();

    const divFilter = $('<div class="row"></div>');
    const department = $(`<div class="input-field col s12 m3">                            
                            <select>
                              <option value="" disabled selected>Elige una opción</option>
                              <option value="1">Lima</option>
                            </select>
                            <label>DEPARTAMENTO</label>
                          </div>`);
    const province = $(`<div class="input-field col s12 m3">
                            <select>
                              <option value="" disabled selected>Elige una opción</option>
                              <option value="1">Lima</option>
                            </select>
                            <label>PROVINCIA</label>
                          </div>`);

    const district = $(`<div class="input-field col s12 m3">
                            <select multiple>
                              <option value="" disabled selected>Elige una opción</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>
                            <label>DISTRITO</label>
                          </div>`);

    divFilter.append(department);
    divFilter.append(province);
    divFilter.append(district);
    container.append(divFilter);
    container.append(showMap());
    return container;
};
// const getGarage = () => {
//     $.getJSON('http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/taller', (json) => {
//
//         state.garage = json;
//         console.log(json);
//     });
// };