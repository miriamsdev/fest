const Garages = (update) =>{
  const container = $('<section class="container"></section>');
  const row = $('<div class="row">Talleres</div>');

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

    const arrDistrict=[], arrTypeGarage=[];
    state.garage.forEach((e)=>{
        return arrDistrict.push(e.distrito);
    });
    console.log(arrDistrict.unique());
    let option, objDistrict = arrDistrict.unique();

    for(let elem in objDistrict){
        option = $(`<option value="${objDistrict[elem]}">${objDistrict[elem]}</option>`);
        selectDis.append(option);
    };
    const labelDis = $('<label>DISTRITO</label>');
    //multiple
    const typeGarage = $(`<div class="input-field col s12 m3"></div>`);
    const selectTypeGarage = $('<select><option value="" disabled selected>Elige una opción</option><option value="Todos">Todos</option></select>');

    state.garage.forEach((e)=>{
        return arrTypeGarage.push(e.tipo);
    });
    console.log(arrTypeGarage.unique());
    let optionTypes, objType = arrTypeGarage.unique();

    for(let elem in objType){
        optionTypes = $(`<option value="${objType[elem]}">${objType[elem]}</option>`);
        selectTypeGarage.append(optionTypes);
    };


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

    return container;
};
