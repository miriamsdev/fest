"use strict";

const state= {
    screen : null,
    user: null,
    vehicle: null
};
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

$( _=>{
    const root =$('#root');
    render(root);
});

//end points GET
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/persona
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/vehiculo
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan

//end points POST
//http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/culqi/pagar
