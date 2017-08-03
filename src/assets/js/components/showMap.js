const showMap = () => {
    const div =$('<div></div>');
    const mapa = $('<div id="map"></div>');
    let latitud, longitud;
    $( _ =>{
        //Crea el mapa
        const map = new GMaps({
            div: '#map',
            lat: -12.043333,
            lng: -77.028333
        });
        //Añade marcador de la direccion de la estacion seleccionada

        state.garage.forEach((e)=> {
            map.addMarker({
                lat: e.latitud,
                lng: e.longitud,
                title: e.nombre,
                infoWindow: {
                    content: `<div style="color:#212121;">
                                <strong>TALLER ${e.nombre}</strong>
                                <ul>
                                    <li>Dirección: ${e.direccion}</li>
                                    <li><a href="tel:+51">Teléfono: ${e.telefono}</a></li>
                                </ul>
                              </div>`
                }
            });
        });
        //Determina la ubicación actual
        GMaps.geolocate({
            success: function(position) {
                latitud = position.coords.latitude;
                longitud = position.coords.longitude;
                map.setCenter(latitud, longitud);

                //Funcion que añade marcador de la ubicacion actual
                map.addMarker({
                    lat: latitud,
                    lng: longitud,
                    infoWindow: {
                        content: '<div style="color:#212121;"><strong>Tu ubicación:</strong><p>lima</p></div>'
                    },
                    style: {
                        background: 'blue'
                    },
                });
            },
            error: function(error) {
                alert('Geolocalización fallada: '+error.message);
            },
            not_supported: function() {
                alert("Tu navegador no soporta la API geolocation");
            }
        });
    });
    div.append(mapa);
    return div;
}