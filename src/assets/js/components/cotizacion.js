const Cotizacion = (update) => {
    const parent = $('<section class="container"></section>');
    const cotizacion = $('<div class="row"></div>');
    const welcome = $('<p class="dataUser__welcome">¡Perfecto'+state.user.nombres+', estás a un paso de terminar!</p><p class="dataUser__text">Acabas de escoger:</p>');
    
    const placa = $('<span>Placa:'+state.vehicle.placa+'</span><br>');
    const marca = $('<span>Marca:'+state.vehicle.marca+'</span><br>');
    const modelo = $('<span>Modelo:'+state.vehicle.modelo+'</span><br>');
    const año = $('<span>Año:'+state.vehicle.anioFabricacion+'</span><br>');
    const plan = $('<span>Plan: '+ state.selectedPlan +'</span><br>');
    
    const descripcion = $('<p>Este Plan incluye '+state.cobertura+'</p><br><p>Si estás conforme con  este plan, continúa con el pago.</p>');
    
    const continua = $('<button type="button" class="btn-large dataUser__button">CONTINUAR</button>');
    
    cotizacion.append(welcome);
    cotizacion.append(placa);
    cotizacion.append(marca);
    cotizacion.append(modelo);
    cotizacion.append(año);
    cotizacion.append(plan);
    cotizacion.append(descripcion);
    
    continua.on('click', ()=>{
        state.screen = PagosCulqi;
        update();
    });
    
    cotizacion.append(continua);
    parent.append(cotizacion);
    
    return parent;
} 