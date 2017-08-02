"use strict";

const DniRegister = (update) => {
  const user_data= $('<section id="user-data"></section>');
  const label= $('<label for="">Ingrese nro de DNI</label>');
  const user_dni = $('<input id="user-dni" type="text" name="" value="">');
  const confirm_btn= $('<button id="continue" type="button" name="button">CONFIRMAR</button>');
  const continue_btn= $('<button id="continue" type="button" name="button">CONTINUAR</button>');
  const result= $('<div class="result"></div>');
  user_data.append(label);
  user_data.append(user_dni);
  user_data.append(confirm_btn);
  user_data.append(continue_btn);
  user_data.append(result);

  confirm_btn.on('click', _ => {
    check_user(user_dni.val());
  });
  continue_btn.on('click', _ => {
    console.log('Estás en registro de datos de auto');
  });
  return user_data;
}

const check_user= (dni) => {
  let url= 'https://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/persona/' + dni ;
  $.getJSON(url, (response)=>{
    state.user= response;

    const user_name= $('<p class="user-name">'+ state.user.nombres+'</p>');
    const user_lastname= $('<p class="user-lastname">'+ state.user.apellidos+'</p>');
    $('.result').append(user_name);
    $('.result').append(user_lastname);
  }).fail(function() {
    state.user= 'Persona no encontrada';
  });
}
