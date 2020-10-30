import RequestModule from "./requests/request_module.js";
import Logic from "./requests/logic.js";

const request = new RequestModule();
const logic = new Logic();

async function app() {
  const futureDate = logic.getSpecificWeekdayFutureDate(2);
  if (logic.isThereNoReservation(await request.postRequest(futureDate))) {
    wait(60000 * 15);
  } else {
    console.log(`opening found for ${futureDate} !!!!`);
    wait(60000 * 3000);
  }
}

function wait(ms) {
  setTimeout(function () {
    app();
  }, ms);
}

app();
