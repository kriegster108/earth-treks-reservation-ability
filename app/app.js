import RequestModule from './requests/request_module.js' 
import Logic from './requests/logic.js'
 
const request = new RequestModule();
const logic = new Logic();

async function app() {
  if(logic.isThereNoReservation(await request.postRequest(logic.getSpecificWeekdayFutureDate(2)))) wait(10000);
  console.log('it works!!!')
}

function wait(ms) {
  setTimeout(function() {  
    app();
    }, ms)
}


app();