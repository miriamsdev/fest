'use strict';

const Planes = ()=>{
    const container = $('<section class="container"></section>');
    const titleplan = $('<h3>¡Crea un Plan a tu conveniencia!</h3>');
    const infoplan = $('<p>Elige el plan que más te guste:</p>');
    const tablero = $('<div class="row"></div>');

    $.getJSON('https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan', (json) => {
        state.plan = json;
        $.each(state.plan, (i,val)=>{
            const contmobile = $('<div class="hide-on-large-only"></div>');
            const ul = $('<ul class="collapsible" data-collapsible="accordion">');
            const li = $('<li></li>');
            const collap_header = $('<div class="collapsible-header">Plan<br>'+state.plan[i].nombre+'</div>');
            const collap_body = $('<div class="collapsible-body"></div>');
            const labelmobile = $('<label for="slider">Número de Cuotas</label>');
            const rangemobile = $('<input id="range" type="range" value="0" min="0" max="12" step="6"/>');
            const primamobile = $('<p>S/ 0.00</p>');
            const buttonmobile = $('<button>Adquirir</button>');
            
            
            const plan = $('<div class="hide-on-small-only col m4 l4"></div>');
            const contenido = $('<h4>'+state.plan[i].nombre+'</h4>');
            const label = $('<label for="slider">Número de Cuotas</label>');
            const range = $('<input id="range" type="range" value="0" min="0" max="12" step="6"/>');
            const prima = $('<p>S/ 0.00</p>');
            const button = $('<button>Adquirir</button>');
            
            let selectrange = $(".value").text();
            let valueprima = state.plan[i].prima;
            
            range.on("change", function(){
                let operacion = parseInt(valueprima * (this.value));
                prima.text("S/ "+operacion);
            });
            
            rangemobile.on("change", function(){
                let operacion = parseInt(valueprima * (this.value));
                primamobile.text("S/ "+operacion);
            });
            
            $(document).ready(function(){
                $('.collapsible').collapsible();
            });
            
            li.append(collap_header);
            collap_body.append(labelmobile);
            collap_body.append(rangemobile);
            collap_body.append(primamobile);
            li.append(collap_body);
            ul.append(li);
            contmobile.append(ul);
            
            plan.append(contenido);
            plan.append(label);
            plan.append(range);
            plan.append(prima);
                                         
            $.each(state.plan[i].coberturas, (i,val)=>{
                const cober = $('<p>'+val.descripcion+'</p>');
                const cobermobile = $('<p>'+val.descripcion+'</p>');
                
                collap_body.append(cobermobile);
                collap_body.append(buttonmobile);
                plan.append(cober);
            });
            
            button.on('click', ()=>{
                state.selectPlan = state.plan[i].id; 
                state.selectPlan = state.plan[i].prima; 
                state.selectPlan = state.plan[i];
            });
            
            plan.append(button);
            tablero.append(contmobile);
            tablero.append(plan);
            
        });
        
    });
    container.append(titleplan);
    container.append(infoplan);    
    container.append(tablero);
    
    return container;
}