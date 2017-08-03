const showMap = (inputSearch) => {
    const mapa = $('<div id="map"></div>');
    let latitud, longitud;
    $( _ =>{
        //Crea el mapa
        const map = new GMaps({
            div: '#map',
            lat: -12.043333,
            lng: -77.028333,
            setZoom: 12
        });

        //Añade marcador a Mapa
        state.garage.forEach((elem)=> {
            if (inputSearch == "" || inputSearch == "Todos") {
                addMarkerstoMap(map,elem);
            }else if(inputSearch == elem.distrito){
                addMarkerstoMap(map,elem);
            }else if(inputSearch == elem.tipo){
                addMarkerstoMap(map,elem);
            }
        });

        //Determina la ubicación actual
        const divDistance = $(`<div class="distance"></div>`);
        GMaps.geolocate({
            success: function(position) {
                latitud = position.coords.latitude;
                longitud = position.coords.longitude;
                map.setCenter(latitud, longitud);

                //Funcion que añade marcador de la ubicacion actual
                map.addMarker({
                    lat: latitud,
                    lng: longitud,
                    color: 'blue',
                    setZoom:9,
                    infoWindow: {
                        content: '<div style="color:#212121;"><strong>Tu ubicación actual:</strong><p>lima</p></div>'
                    }
                });
                //Obtiene el listado de Talleres
                state.garage.forEach((elem)=>{
                    if (inputSearch == "" || inputSearch == "Todos") {
                        getRoutes(map,elem,latitud,longitud);
                    }else if(inputSearch == elem.distrito){
                        getRoutes(map,elem,latitud,longitud);
                    }else if(inputSearch == elem.tipo){
                        getRoutes(map,elem,latitud,longitud);
                    }
                });

            },
            error: (error) => {
                alert('Geolocalización fallada: '+error.message);
            },
            not_supported: () => {
                alert("Tu navegador no soporta la API de geolocation");
            }
        });
    });
    return mapa;
};

function addMarkerstoMap(map,elem) {
    map.addMarker({
        lat: elem.latitud,
        lng: elem.longitud,
        title: elem.nombre,
        infoWindow: {
            content: `<div style="color:#212121;">
                        <strong>TALLER ${elem.nombre}</strong>
                        <ul>
                            <li>Dirección: ${elem.direccion}</li>
                            <li><a href="tel:+51">Teléfono: ${elem.telefono}</a></li>
                        </ul>
                      </div>`
        }
    });
}

 function getRoutes(map,elem,latitud,longitud) {
     $('#garages').empty();
     map.getRoutes({
         origin: [latitud, longitud],
         destination: [elem.latitud, elem.longitud],
         callback: function(response){
             const distance = response[0].legs[0].distance.value/1000;
             const li=$(`<li>
                                <div class="collapsible-header">
                                    <div class="col s7"><i class="material-icons caret">location_on</i>${elem.nombre}</div>
                                    <div class="col s4"><strong>Distancia: </strong> ${distance} Km.</div>
                                    <span class="col s1 caret">▼</span>
                                </div>
                                <div class="collapsible-body">
                                    <ul>
                                        <li>Dirección: ${elem.direccion}</li>
                                        <li><a href="#">Teléfono: ${elem.telefono}</a></li>
                                        <li>Tipo de Taller: ${elem.tipo}</li>
                                    </ul>                          
                                </div>
                            </li>`);
             $('#garages').append(li);
         }
     });
 }