'use strict';

const Planes = ()=>{
    const container = $('<section class="container"></section>');
    const titleplan = $('<h1>Planes</h1>');
    const infoplan = $('<p>Por favor, elige el plan que más te convenga:</p>');
    const table = $('<table class="responsive-table"></table>');
    const thead = $('<thead></thead>');
    const trhead = $('<tr></tr>');
    const tbody = $('<tbody></tbody>');
    const trbody = $('<tr></tr>');
    const trbutton = $('<tr></tr>');

    $.getJSON('https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/plan', (json) => {
        state.plan = json;
        $.each(state.plan, (i,val)=>{
            const contenido = $('<th>'+state.plan[i].nombre+'</th>');
            const prima = $('<td>'+state.plan[i].prima+'</td>');
            const button = $('<td><button>Adquirir</button></td>');

            button.on('click', ()=>{
                state.selectPlan = state.plan[i].prima;   
            });

            console.log(state.selectPlan);

            trhead.append(contenido);
            thead.append(trhead);
            trbody.append(prima);
            trbutton.append(button);
            tbody.append(trbody);
            tbody.append(trbutton);
        });
    });

    container.append(titleplan);
    container.append(infoplan);    
    container.append(table);
    table.append(thead);
    table.append(tbody);

    return container;
}