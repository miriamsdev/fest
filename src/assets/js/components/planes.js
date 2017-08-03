'use strict';

const Planes = ()=>{
    const container = $('<section class="container"></section>');
    const titleplan = $('<h1>Planes</h1>');
    const infoplan = $('<p>Por favor, elige el plan que más te convenga:</p>');
    const tablero = $('<div class="row"></div>');

    $.getJSON('https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan', (json) => {
        state.plan = json;
        $.each(state.plan, (i,val)=>{
            const plan = $('<div class="col s12 m4 l4"></div>');
            const contenido = $('<h4>'+state.plan[i].nombre+'</h4>');
            const range = $('<label for="slider">Cuotas:</label><input type="range" value="12" min="0" max="12" step="6"/>');
            const prima = $('<p>'+state.plan[i].prima+'</p>');
            const button = $('<button>Adquirir</button>');
            
            plan.append(contenido);
            plan.append(range);
            plan.append(prima);
            
            
            $.each(state.plan[i].coberturas, (i,val)=>{
                const cober = $('<p>'+val.descripcion+'</p>');
                plan.append(cober);
            });
            
            button.on('click', ()=>{
                state.selectPlan = state.plan[i].prima; 
                state.selectPlan = state.plan[i];
            });
            
            plan.append(button);
            tablero.append(plan);
        });
    });
    /*
    $.getJSON('http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/cobertura', (json) => {
        state.cobertura = json;
        $.each(state.cobertura, (i,val)=>{
            const listcobertura = $('<p>'+state.cobertura[i].id+'</p>');
            
            tablero.append(listcobertura);
        });
    });*/
    
    container.append(titleplan);
    container.append(infoplan);    
    container.append(tablero);

    return container;
}