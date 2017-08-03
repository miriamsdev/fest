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

    const district = $(`<div class="input-field col s12 m3"></div>`);
    const selectDis = $(`<select>
                            <option value="" disabled selected>Elige una opción</option>
                            <option value="">Todos</option>
                         </select>`);

    // const districtFilter = state.garage.filter((e)=>{
    //     return state.garage.indexOf(e.distrito)==-1;
    // });
    let option;
    state.garage.forEach((e)=>{
        option = $(`<option value="${e.distrito}" data-lat="${e.latitud}" data-lng="${e.longitud}">${e.distrito}</option>`);
        selectDis.append(option);
    });
    const labelDis = $('<label>DISTRITO</label>');
    //multiple
    const typeGarage = $(`<div class="input-field col s12 m3">
                            <select>
                              <option value="" disabled selected>Elige una opción</option>
                              <option value="1">Option 1</option>
                              <option value="2">Option 2</option>
                              <option value="3">Option 3</option>
                            </select>
                            <label>TIPO DE TALLER</label>
                          </div>`);

    divFilter.append(department);
    divFilter.append(province);
    district.append(selectDis);
    district.append(labelDis);
    divFilter.append(district);
    divFilter.append(typeGarage);
    container.append(divFilter);

    const mapContainer =$('<div class="map-container"></div>');
    mapContainer.append(showMap());
    selectDis.on('change',(e)=>{
        const districtSelected = selectDis.val();
        state.lat = option.data('lat');
        state.lng = option.data('lng');
        showMarkerSelected(districtSelected);
       console.log(state.lat + "--"+state.lng);
    });

    container.append(mapContainer);
    return container;
};
