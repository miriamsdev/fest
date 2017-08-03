"use strict";

const DniRegister = (update) => {
  const user_data= $('<section class="container"></section>');
  const welcome = $('<p class="dataUser__welcome">¡Bienvenido!</p><p class="dataUser__text">En unos pocos pasos podrás encontrar y adquirir el seguro vehicular que necesitas.</p><p class="dataUser__text">Por favor, ingresa tu DNI</p>');
  const contentDni = $('<div class="input-field col s12 dataUser__input"></div>'); 
  const label= $('<label for="user-dni" class="active">DNI</label>');
  const user_dni = $('<input id="user-dni" type="text" placeholder="Ingresa tu DNI" maxlength="8">');
  const loader = $('<img src="assets/img/load.svg" class="responsive-img">');
  const contentButton = $('<div class="input-field col s12 continue"></div>');
  const search_btn= $('<button id="search" type="button" class="btn-large dataUser__button">BUSCAR</button>');
  const continue_btn= $('<button id="continue" type="button" class="btn-large dataUser__button">CONTINUAR</button>');
    
  const result= $('<p id="result"></p>');

  contentDni.append(label);
  contentDni.append(user_dni);
  
  contentButton.append(search_btn);
  contentButton.append(continue_btn);
    
  user_data.append(welcome);    
  user_data.append(contentDni);
  user_data.append(contentButton);
  user_data.append(result);

  user_dni.on("keypress", (e)=> {
    let tecla= e.which || e.keyCode;
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
    console.log('Estás en registro de datos de auto');
    state.screen = PlacaRegister;
    const root = $('#root');
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
      var nom = state.user.nombres;
      var ape = state.user.apellidos;
    const user_name= $('<span style="text-transform: capitalize;">'+ nom.toLowerCase()+ ' ' + ape.toLowerCase() +'</span>');
    report.text("Hola ");
    report.append(user_name);
    $('#search').hide();
    $('#continue').show();
  }).fail(function() {
    report.text('Persona no encontrada');
  });
}
