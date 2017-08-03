'use strict';
const PagosCulqi = (update)=>{
    const pago = $('<section id="pago"></section>');
    const row = $('<div class="row"></row>');
    
    const contentTarjeta = $('<div class="col s12"></div>');
    const nroTarjeta = $('<input type="text" id="numberCard" maxlength="16" placeholder="número tarjeta" onKeyPress="return checkIt(event)">');
    
    const contentDate = $('<div class="contentDate col s12"></div>');
    const month = $('<input type="text" id="month" maxlength="2" placeholder="MM" onKeyPress="return checkIt(event)" class="col s6">');
    const year = $('<input type="text" id="month" maxlength="2" placeholder="YY" onKeyPress="return checkIt(event)" class="col s6">');
    const cvv = $('<input type="text" id="cvv" placeholder="cvv" maxlength="3" onKeyPress="return checkIt(event)">');
    
    const contentInputName = $('<div class="input-field col s6"></div>');
    const name = $('<input type="text" id="name" placeholder="Nombre">');
    
    const contentInputLast = $('<div class="input-field col s6"></div>');
    const lastName = $('<input type="text" id="lastname" placeholder="Apellido">');
    
    const contentEmail = $('<div class="input-field"></div>');
    const mail = $('<input type="email" id="mail" class="validate">');
    const labelEmail = $('<label for="email" data-error="Ingrese un email valido" data-success="email valido">Email</label>');
    
    const pay = $('<input type="submit" id="pay" value="Pagar" disabled>');
        
    pay.on('click', ()=>{
        $.post("http://rasveuswap01-test01.azurewebsites.net/Laboratoria/v1/culqi/pagar",{id: pay.name},function(response){
             pay.idcotizacion = reponse;
         },"json");
    });
    
    cvv.on('keyup', (e)=>{
        if($(this).val() >= 1 && $(this).val() <= 3){
         validaInputs();
        }
    });
    
    month.on('keyup', (e)=>{
         if($(this).val() >= 1 && $(this).val() <= 12){
            validaInputs();
         }else{
            validaInputs();
         }
    });
    
    year.on('keyup', ()=>{
       validaInputs(); 
    });
    
    name.on('keyup', (e)=>{
        validaInputs();
    });
    
    lastName.on('keyup', (e)=>{
        validaInputs();
    });
    
    mail.on('keyup', (e)=>{
        validaInputs();
        if($(this).val().trim().length == 0){
          dataset.error = "Debe ingresar su correo electrónico";
        }
    });
    
    const validaInputs = () =>{
        if(name.val() !="" && lastName.val() !="" && mail.val() !="" && cvv.val() !="" && year.val() !="" && month.val() !="" && nroTarjeta.val() !=""){pay.removeAttr("disabled")}else{pay.attr("disabled", true)};
    }
     
    contentInputName.append(name);
    contentInputLast.append(lastName);
    contentEmail.append(mail);
    contentEmail.append(labelEmail);
    contentTarjeta.append(nroTarjeta);
    contentDate.append(month);
    contentDate.append(year);
    
    row.append(contentTarjeta);
    row.append(contentDate);
    row.append(cvv);
    row.append(contentInputName);
    row.append(contentInputLast);
    row.append(contentEmail);
    row.append(pay);
    
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