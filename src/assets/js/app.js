"use strict";

const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    if(state.screen == null){
        section.append(DniRegister( _ => render(root)));
    }
    else{
        section.append(state.screen( _ => render(root)));
    }
    root.append(section);

};
const state = {
    screen : null,
    user: null,
    plan: null,
    idPlan: null,
    selectedPlan: null,
    cobertura: null,
    idcotizacion : null
};

$( _=>{

    $.getJSON(`https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/taller/${state.idcotizacion}`, (json) => {
        state.garage = json;
        const root = $('#root');
        render(root);
        $('select').material_select();
    });

});