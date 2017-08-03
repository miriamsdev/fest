const Cotizacion = () => {
    const parent = $('<section class="container"></section>');
    const cotizacion = $('<div></div>');
    const name = $('<span>NOMBRES:</span><br>');
    const lastname = $('<span>APELLIDOS:</span><br>');
    const placa = $('<span>PLACA:</span><br>');
    const marca = $('<span>MARCA:</span><br>');
    const modelo = $('<span>MODELO:</span><br>');
    const año = $('<span>AÑO:</span><br>');
    const plan = $('<span>PLAN: '+ state.selectedPlan +'</span><br>');
    const descripcion = $('<p>Este producto brinda cobertura a nivel local en cualquier taller. Llámanos en caso de accidentes y consultas, te atenderemos de manera personalizada las 24 horas los 365 días del año.</p>');
    
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