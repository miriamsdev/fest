"use strict";

const Shopping_thanks = (update) => {
  const message= $('<section>Gracias por tu compra!</section>');
  const title= $('<p>Tu compra ha sido exitosa</p>');
  const text= $('<div></div>');
  const garages_btn= $('<button id="continue" type="button" class="btn-large dataUser__button">TALLERES</button>');

  message.append(title);
  text.append('<p>Acabas de asegurar tu vehículo con la mejor opción.</p>');
  text.append('<p>Te invitamos a conocer dónde puedes encontrar el Taller más cercano para tu vehículo asegurado.</p>');
  message.append(text);
  message.append(garages_btn);

  garages_btn.on('click', _ => {
    state.screen = Garages;
    update();
  });
  return message;
}
