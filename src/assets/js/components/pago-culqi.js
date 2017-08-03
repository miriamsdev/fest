'use strict';
const PagosCulqi = (update)=>{
    
    const pago = $('<section id="pago" class="container"></section>');
    const row = $('<div class="row"></row>');

    const contentTarjeta = $('<div class="input-field col s12"></div>');
    const nroTarjeta = $('<input type="text" id="numberCard" maxlength="16" placeholder="número tarjeta">');
    const labelTarjeta = $('<label for="numberCard" class="active">NÚMERO DE TARJETA</label>');

    const contentDate = $('<div class="input-field col s12" id="date"></div>');
    
    const month = $('<input type="text" id="month" maxlength="2" placeholder="MM" class="col s6">');
    const year = $('<input type="text" id="year" maxlength="4" placeholder="YYYY" class="col s6">');
    const date = $('<label for="date" class="active">FECHA</label>');
    
    const contentCVV = $('<div class="input-field col s6"></div>');
    const cvv = $('<input type="text" id="cvv" placeholder="cvv" maxlength="3" >');
    const labelCvv = $('<label for="cvv" class="active">CVV</label>');

    const contentName = $('<div class="input-field col s12"></div>');
    const name = $('<input type="text" id="name" placeholder="Ingresa tu Nombre Completo">');
    const labelName = $('<label for="name" class="active">NOMBRE COMPLETO</label>');
    
    const contentEmail = $('<div class="input-field col s12"></div>');
    const mail = $('<input type="email" id="mail" class="validate" placeholder="Ingresa tu Correo Electrónico">');
    const labelEmail = $('<label for="email" class="active">EMAIL</label>');
    
    const contentButton = $('<div class="input-field col s12 continue"></div>');
    const pay = $('<button class="btn-large dataUser__button" disabled>PAGAR</button>');

    cvv.on('keyup keypress', (e)=>{
        if($(this).val() >= 1 && $(this).val() <= 3){
         validaInputs();
         checkIt(e);
        }
    });

    month.on('keyup keypress', (e)=>{
         if($(this).val() >= 1 && $(this).val() <= 12){
            validaInputs();
             checkIt(e);
         }
    });

    year.on('keyup keypress', (e)=>{
       validaInputs();
        checkIt(e);
    });

    name.on('keyup keypress', (e)=>{
        validaInputs();
        checkIt(e);
    });

    mail.on('keyup keypress', (e)=>{
        validaInputs();
        checkIt(e);
    });
    
    pay.on('click', ()=>{
            $.ajax({
                method :"POST",
                dataType : "json",
                contentType : "application/json",
                url: "http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/culqi/pagar",
                data : '{"idPlan":'+state.idPlan+'}'
            }).done((data)=>{
                state.idcotizacion = data;
                state.screen = Shopping_thanks;
                update();
            });
    });

    const validaInputs = () =>{if(name.val() !="" && cvv.val() !="" && year.val() !="" && month.val() !="" && nroTarjeta.val() !=""){pay.removeAttr("disabled")}else{pay.attr("disabled", true)};
    }

    contentCVV.append(cvv);
    contentCVV.append(labelCvv);
    
    contentName.append(name);
    contentName.append(labelName);
    
    contentEmail.append(mail);
    contentEmail.append(labelEmail);
    
    contentTarjeta.append(nroTarjeta);
    contentTarjeta.append(labelTarjeta);
    
    contentDate.append(month);
    contentDate.append(year);
    contentDate.append(date);
    
    contentButton.append(pay);
    
    row.append(contentTarjeta);
    row.append(contentDate);
    row.append(contentCVV);
    row.append(contentName);
    row.append(contentEmail);
    
    row.append(contentButton);

    pago.append(row);

    return pago;
}

function checkIt(evt) {
   evt = (evt) ? evt : window.event
   var charCode = (evt.which) ? evt.which : evt.keyCode
   if (charCode > 31 && (charCode < 48 || charCode > 57)) {
       status = "solo acepta numeros"
       return false
   }
   status = ""
   return true
}