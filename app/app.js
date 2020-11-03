import RequestModule from "./requests/request_module.js";
import Logic from "./requests/logic.js";
import pkg from "datejs";
import Mail from "./requests/mail.js";

const request = new RequestModule();
const logic = new Logic();
const mail = new Mail();

async function app() {
  const futureDate = logic.getNextWeekday("wednesday");
  if (logic.isThereNoReservation(await request.postRequest(futureDate))) {
    console.log(`Checking for date of: ${futureDate}:: reservation not ready`);
    wait(60000 * 15);
  } else {
    console.log(`opening found for ${futureDate} !!!!`);
    await mail.sendEmail();
    wait(60000 * 15);
  }
}

function wait(ms) {
  setTimeout(function () {
    app();
  }, ms);
}

app();
