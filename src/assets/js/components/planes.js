'use strict';

const Planes = (update) => {
    const container = $('<section class="container plan"></section>');
    const titleplan = $('<p class="dataUser__welcome">¡Crea un Plan a tu conveniencia!</p>');
    const infoplan = $('<p class="infoplan dataUser__text">Elige el plan que más te guste:</p>');
    const tablero = $('<div class="row"></div>');

    $.getJSON('https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan', (json) => {
        state.plan = json;
        $.each(state.plan, (i,val)=>{
            const contmobile = $('<div class="contmobile hide-on-large-only hide-on-med-only"></div>');
            const ul = $('<ul class="collapsible" data-collapsible="accordion">');
            const li = $('<li></li>');
            const collap_header = $('<div class="dataUser__text collapsible-header" style="text-transform:capitalize;">Plan<br>'+state.plan[i].nombre.toLowerCase()+'<div class="iconA"><i class="material-icons right more">expand_more</i><i class="material-icons right less" style="display: none">expand_less</i></div></div>');
            const collap_body = $('<div class="collapsible-body"></div>');
            const labelmobile = $('<label for="slider">Número de Cuotas</label>');
            const formobile = $('<form action="#"></form>');
            const range_fieldmobile = $('<p class="range-field"></p>');
            const rangemobile = $('<input id="range" type="range" value="0" min="0" max="12" step="6"/>');
            const primamobile = $('<p>S/ 0.00</p>');
            const buttonmobile = $('<button type="button" name="button" class="btn-large dataUser__button">Adquirir</button>');
                        
            const plan = $('<div class="hide-on-small-only col m4 l4"></div>');
            const contenido = $('<h6 style="text-transform: capitalize;">'+state.plan[i].nombre.toLowerCase()+'</h6>');
            const label = $('<label for="slider">Número de Cuotas</label>');
            const form = $('<form action="#"></form>');
            const range_field = $('<p class="range-field"></p>');
            const range = $('<input id="range" type="range" value="0" min="0" max="12" step="6"/>');
            const prima = $('<p>S/ 0.00</p>');
            const button = $('<button type="button" name="button" class="btn-large dataUser__button">Adquirir</button>');
            
            const progressBar = $(`<div class="progress__register">
            <ul class="estado-3pasos estado-login">
                <li class="paso-1 presente"><span><img class="breadcrumb p1" src="assets/img/iconos/usuario.svg" alt="user"></span><p></p></li>
                <li class="paso-2 "><span><img class="breadcrumb p2" src="assets/img/iconos/auto.svg" alt="auto"></span><p></p></li>
                <li class="paso-3 "><span><img class="breadcrumb p3" src="assets/img/iconos/plan.svg" alt="check"></span><p></p></li>
                <li class="paso-4 "><span><img class="breadcrumb gris" src="assets/img/iconos/confirmacion.svg" alt="confirmacion"></span><p></p></li>
            </ul>
          </div>`);
            
            let selectrange = $(".value").text();
            let valueprima = state.plan[i].prima;
            
            rangemobile.on("change", function(){
                let operacion = parseInt(valueprima * (this.value));
                primamobile.text("S/ "+operacion);
            });
            
            range.on("change", function(){
                let operacion = parseInt(valueprima * (this.value));
                prima.text("S/ "+operacion);
            });
            
            $(document).ready(function(){
                $('.collapsible').collapsible();
            });
            
            li.append(collap_header);
            collap_body.append(labelmobile);
            formobile.append(range_fieldmobile);
            range_fieldmobile.append(rangemobile);
            collap_body.append(formobile);
            collap_body.append(primamobile);
            li.append(collap_body);
            ul.append(li);
            contmobile.append(ul);
            
            plan.append(contenido);
            form.append(range_field);
            range_field.append(range);
            plan.append(form);
            plan.append(prima);
                                         
            $.each(state.plan[i].coberturas, (i,val)=>{
                const cober = $('<p>'+val.descripcion+'</p>');
                const cobermobile = $('<li>'+val.descripcion+'</li>');
                
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
    container.append(progressBar);
    return container;
}

$(document).ready(function(){
  $( ".collapsible-header" ).click(function() {
      $(".more",this).toggle()
      $(".less", this).toggle()
  });
});