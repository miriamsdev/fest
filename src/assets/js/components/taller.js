const Garages = (update) =>{
  const container = $('<section class="container"></section>');
  const welcome = $('<p class="dataUser__welcome">¡Encuentra tu taller más cercano!</p><p class="dataUser__text"></p>');
  const row = $('<div class="row"><h4>Lista de Talleres</h4></div>');

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
                            <option value="Todos">Todos</option>
                         </select>`);

    const arrDistrict=[], arrTypeGarage=[],uniqueDistrict = [], uniqueTypeGarage = [];
    state.garage.forEach((e)=>{
        return arrDistrict.push(e.distrito);
    });

    $.each(arrDistrict, function(i, elem){
        if($.inArray(elem, uniqueDistrict) === -1) uniqueDistrict.push(elem);
    });

    let option,optionTypes;
    uniqueDistrict.forEach((elem)=>{
        option = $(`<option value="${elem}">${elem}</option>`);
        selectDis.append(option);
    });
    const labelDis = $('<label>DISTRITO</label>');

    //multiple
    const typeGarage = $(`<div class="input-field col s12 m3"></div>`);
    const selectTypeGarage = $('<select><option value="" disabled selected>Elige una opción</option><option value="Todos">Todos</option></select>');

    state.garage.forEach((e)=>{
        return arrTypeGarage.push(e.tipo);
    });
    $.each(arrTypeGarage, function(i, elem){
        if($.inArray(elem, uniqueTypeGarage) === -1) uniqueTypeGarage.push(elem);
    });

    uniqueTypeGarage.forEach((elem)=>{
        optionTypes = $(`<option value="${elem}">${elem}</option>`);
        selectTypeGarage.append(optionTypes);
    });

    const labelTaller = $('<label>TIPO DE TALLER</label>');

    container.append(welcome);
    divFilter.append(department);
    divFilter.append(province);
    district.append(selectDis);
    district.append(labelDis);
    divFilter.append(district);
    typeGarage.append(selectTypeGarage);
    typeGarage.append(labelTaller);
    divFilter.append(typeGarage);
    container.append(divFilter);


    //Mapa
    const mapContainer =$('<div class="map-container"></div>');
    mapContainer.append(showMap(''));
    selectDis.on('change',(e)=>{
        e.preventDefault();
        const districtSelected = selectDis.val();
        mapContainer.empty();
        mapContainer.append(showMap(districtSelected));
    });

    selectTypeGarage.on('change',(e)=>{
        e.preventDefault();
        const typeSelected = selectTypeGarage.val();
        mapContainer.empty();
        mapContainer.append(showMap(typeSelected));
    });

    container.append(mapContainer);

    //Lista talleres
    const ul = $(`<ul id="garages" class="collapsible" data-collapsible="accordion">
    </ul>`);

    row.append(ul);
    container.append(row);
    ul.collapsible();
    
    return container;
};

