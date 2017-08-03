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
      console.log("es numero");
      return true;
    }else if (tecla > 64 && tecla < 91) {
      console.log("es letra mayuscula");
      return true;
    }else if (tecla > 96 && tecla < 123) {
      console.log("es letra minuscula");
      return true;
    }else {
      console.log("no es letra o numero");
      return false;
    }
  });

  continue_btn.hide();
  search_btn.prop('disabled', true);
  return vehicle_data;
}
