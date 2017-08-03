const Garages = (update) =>{
  const container = $('<section class="container"></section>');
  const row = $('<div class="row">Lista de Talleres</div>');

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
    Array.prototype.unique=function(a){
        return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
    });

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
        const districtSelected = selectDis.val();
        state.lat = option.data('lat');
        state.lng = option.data('lng');
        mapContainer.append(showMap(districtSelected));
    });

    selectTypeGarage.on('change',(e)=>{
        const typeSelected = selectTypeGarage.val();
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
