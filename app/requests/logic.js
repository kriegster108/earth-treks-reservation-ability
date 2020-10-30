
import config from '../conf/config.json'

export default class Logic {
 isThereNoReservation(res) {
    if(res.includes('NOT AVAILABLE YET')) return true;
    if(this.countOccurances(res, 'Availability') === this.countOccurances(res, 'NOT AVAILABLE YET') ||
    this.countOccurances(res, 'Availability') === this.countOccurances(res, 'Please make a different')) return true;
}

countOccurances(str, check) {
    const checkCount = str.match(new RegExp(check, 'g'))
    if(checkCount) return checkCount.length;
    return 0;
}
 // 2
getSpecificWeekdayFutureDate(numOfDayOfWeek) {
    var d = new Date();
    d.setDate(d.getDate() + (numOfDayOfWeek + 7 - d.getDay()) % 7);
    console.log(d.toISOString().split('T')[0].trim());  
    return d.toISOString().split('T')[0].trim();
  }
}