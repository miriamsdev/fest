"use strict";

const PlacaRegister = (update) => {
  const vehicle_data= $('<section id="vehicle-data"></section>');
  const label= $('<label for="">Ingrese nro de placa</label>');
  const vehicle_plate = $('<input id="vehicle-plate" type="text" name="" value="" maxlength="6">');
  const search_btn= $('<button id="search" type="button" name="button">BUSCAR</button>');
  const continue_btn= $('<button id="continue" type="button" name="button">CONTINUAR</button>');
  const result= $('<p id="result"></p>');

  vehicle_data.append(label);
  vehicle_data.append(vehicle_plate);
  vehicle_data.append(search_btn);
  vehicle_data.append(continue_btn);
  vehicle_data.append(result);

  vehicle_plate.on("keypress", (e)=> {
    let tecla= e.keyCode;
    if (tecla > 47 && tecla < 58) {
      return true;
    }else if (tecla > 64 && tecla < 91) {
      return true;
    }else if (tecla > 96 && tecla < 123) {
      return true;
    }else {
      return false;
    }
  });
  vehicle_plate.on("keyup", (e)=> {
    if ($(e.currentTarget).val().length == 6) {
      search_btn.prop("disabled", false);
    }else {
      search_btn.prop("disabled", true);
      continue_btn.hide();
      search_btn.show();
    }
  });
  search_btn.on('click', (e) => {
    check_vehicle(vehicle_plate.val());
  });
  continue_btn.on('click', _ => {
    state.screen = Planes;
    const root =$('#root');
    render(root);
  });
  continue_btn.hide();
  search_btn.prop('disabled', true);
  return vehicle_data;
}
const check_vehicle= (placa) => {
  const report= $('#result');
  report.empty();
  let url= 'https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/vehiculo/' + placa.toUpperCase() ;
  $.getJSON(url, (response)=>{
    state.vehicle= response;
    if (state.vehicle.anioFabricacion == 2017) {
      const vehicle_description= $('<span>'+ state.vehicle.marca + ' ' + state.vehicle.modelo + ' de ' + state.vehicle.anioFabricacion +'</span>');
      report.text("Cuentas con un ");
      report.append(vehicle_description);
      $('#search').hide();
      $('#continue').show();
    }else {
      console.log("menor del 2017");
      report.text('Válido sólo para vehículos 0 Km');
      state.vehicle= null;
      $('#continue').hide();
      $('#search').show();
    }
  }).fail(function() {
    report.text('Nro de placa no encontrado');
  });
}
