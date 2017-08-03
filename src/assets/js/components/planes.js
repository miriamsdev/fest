'use strict';

const Planes = (update) => {
    const container = $('<section class="container"></section>');
    const titleplan = $('<h3>¡Crea un Plan a tu conveniencia!</h3>');
    const infoplan = $('<p>Elige el plan que más te guste:</p>');
    const tablero = $('<div class="row"></div>');

    $.getJSON('https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan', (json) => {
        state.plan = json;
        $.each(state.plan, (i,val)=>{
            const contmobile = $('<div class="hide-on-large-only hide-on-med-only"></div>');
            const ul = $('<ul class="collapsible" data-collapsible="accordion">');
            const li = $('<li></li>');
            const collap_header = $('<div class="collapsible-header">Plan<br>'+state.plan[i].nombre+'</div>');
            const collap_body = $('<div class="collapsible-body"></div>');
            const labelmobile = $('<label for="slider">Número de Cuotas</label>');
            const formobile = $('<div class="onoffswitch"></div>');
            const range_fieldmobile = $('<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>');
            const rangemobile = $('<label class="onoffswitch-label" for="myonoffswitch">');
            const spanmobile = $('<span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span>');
            const primamobile = $('<p>S/ 0.00</p>');
            const buttonmobile = $('<button type="button" name="button">Adquirir</button>');
            
            const plan = $('<div class="hide-on-small-only col m4 l4"></div>');
            const contenido = $('<h6>'+state.plan[i].nombre+'</h6>');
            const label = $('<label for="slider">Número de Cuotas</label>');
            const form = $('<div class="onoffswitch"></div>');
            const range_field = $('<input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked>');
            const range = $('<label class="onoffswitch-label" for="myonoffswitch">');
            const span = $('<span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span>');
            const prima = $('<p>S/ 0.00</p>');
            const button = $('<button type="button" name="button">Adquirir</button>');
            
            let selectrange = $(".value").text();
            let valueprima = ((state.plan[i].prima) * 12);

            /*rangemobile.on("change", function(){
                let operacion = parseInt(valueprima / (this.value));
                primamobile.text("S/ "+operacion);
            });
            
            range.on("change", function(){
                let operacion = parseInt(valueprima / (this.value));
                prima.text("S/ "+operacion);
            });*/
            
            $(document).ready(function(){
                $('.collapsible').collapsible();
            });
            
            li.append(collap_header);
            collap_body.append(labelmobile);
            formobile.append(range_fieldmobile);
            rangemobile.append(spanmobile);
            range_field.append(rangemobile);
            formobile.append(rangemobile);
            collap_body.append(formobile);
            collap_body.append(primamobile);
            li.append(collap_body);
            ul.append(li);
            contmobile.append(ul);
            
            plan.append(contenido);
            plan.append(label);
            form.append(range_field);
            range_field.append(range);
            range.append(span);
            plan.append(form);
            plan.append(prima);
                                                     
            $.each(state.plan[i].coberturas, (i,val)=>{
                const cober = $('<p>'+val.descripcion+'</p>');
                const cobermobile = $('<p>'+val.descripcion+'</p>');
                
                collap_body.append(cobermobile);
                collap_body.append(buttonmobile);
                plan.append(cober);
            });
            
            button.on('click', _=>{
                state.idPlan = state.plan[i].id;
                state.selectedPlan = state.plan[i].nombre; 
                state.screen = Cotizacion;
                const root =$('#root');
                render(root);
            });
            
            buttonmobile.on('click', _=>{
                state.idPlan = state.plan[i].id;
                state.selectedPlan = state.plan[i].nombre; 
                state.screen = Cotizacion;
                const root =$('#root');
                render(root);
            });
            
            plan.append(button);
            tablero.append(contmobile);
            tablero.append(plan);
            
        });
        
    });
    container.append(titleplan);
    container.append(infoplan);    
    container.append(tablero);
    
    $('input[type=range]+.thumb').removeClass('')
    return container;
}