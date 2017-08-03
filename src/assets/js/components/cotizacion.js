const Cotizacion = () => {
    const parent = $('<section class="container"></section>');
    const cotizacion = $('<div></div>');
    const name = $('<span>Nombres:</span><br>');
    const lastname = $('<span>Apellidos:</span><br>');
    const placa = $('<span>Placa:</span><br>');
    const marca = $('<span>Marca:</span><br>');
    const modelo = $('<span>Modelo:</span><br>');
    const año = $('<span>Año:</span><br>');
    const plan = $('<span>Plan:</span><br>');
    const descripcion = $('<p>lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor</p>');
    
    cotizacion.append(name);
    cotizacion.append(lastname);
    cotizacion.append(placa);
    cotizacion.append(marca);
    cotizacion.append(modelo);
    cotizacion.append(año);
    cotizacion.append(plan);
    cotizacion.append(descripcion);
    parent.append(cotizacion);
    
    return parent;
} 