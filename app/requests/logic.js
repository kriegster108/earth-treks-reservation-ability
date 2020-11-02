import config from "../conf/config.json";

export default class Logic {
  isThereNoReservation(res) {
    if (res) {
      if (
        this.countOccurances(res, "Availability") ===
          this.countOccurances(res, "NOT AVAILABLE YET") ||
        this.countOccurances(res, "Availability") ===
          this.countOccurances(res, "Please make a different")
      )
        return true;
    }
    console.log("Response was empty.");
    return true;
  }

  countOccurances(str, check) {
    const checkCount = str.match(new RegExp(check, "g"));
    if (checkCount) return checkCount.length;
    return 0;
  }

  getNextWeekday(day) {
    return Date.parse(`next ${day}`).toISOString().split("T")[0].trim();
  }
}
