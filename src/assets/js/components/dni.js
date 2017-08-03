"use strict";

const DniRegister = (update) => {
  const user_data= $('<section></section>');
  const label= $('<label for="">Ingrese nro de DNI</label>');
  const user_dni = $('<input id="user-dni" type="text" name="" value="" maxlength="8">');
  const search_btn= $('<button id="search" type="button" name="button">BUSCAR</button>');
  const continue_btn= $('<button id="continue" type="button" name="button">CONTINUAR</button>');
  const result= $('<p id="result"></p>');

  user_data.append(label);
  user_data.append(user_dni);
  user_data.append(search_btn);
  user_data.append(continue_btn);
  user_data.append(result);

  user_dni.on("keypress", (e)=> {
    let tecla= e.keyCode;
    if (tecla > 31 && (tecla < 48 || tecla > 57)) {
      return false;
    }else {
      return true;
    }
  });
  user_dni.on("keyup", (e)=> {
    if ($(e.currentTarget).val().length == 8) {
      search_btn.prop("disabled", false);
    }else {
      search_btn.prop("disabled", true);
      continue_btn.hide();
      search_btn.show();
    }
  });
  search_btn.on('click', (e) => {
    check_user(user_dni.val());
  });
  continue_btn.on('click', _ => {
    state.screen = PlacaRegister;
    const root =$('#root');
    render(root);
  });
  continue_btn.hide();
  search_btn.prop('disabled', true);
  return user_data;
}

const check_user= (dni) => {
  const report= $('#result');
  report.empty();
  let url= 'https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/persona/' + dni ;
  $.getJSON(url, (response)=>{
    state.user= response;
    const user_name= $('<span>'+ state.user.nombres+ ' ' + state.user.apellidos +'</span>');
    report.text("Hola ");
    report.append(user_name);
    $('#search').hide();
    $('#continue').show();
  }).fail(function() {
    report.text('Persona no encontrada');
  });
}
