"use strict";
const render = (root)=>{
    root.empty();
    const section = $('<section class="components"></section>');

    if(state.screen == null){
        section.append(Garages( _ => render(root)));
    }
    else{
        section.append(state.screen( _ => render(root)));
    }
    root.append(section);

};

const state = {
    screen : null,
    idCotizacion:4
};

$( _=>{

    $.getJSON(`https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/taller/04`, (json) => {
        state.garage = json;
        // $.each(json,(i,v)=>{
        //     console.log(v.distrito);
        // });
        const root =$('#root');
        render(root);
        $('select').material_select();
    });

});

//end points GET
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/persona
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/vehiculo
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan

//end points POST
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/culqi/pagar
