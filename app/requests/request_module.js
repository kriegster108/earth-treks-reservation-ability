import request from "request";
import config from "../conf/config.json";

export default class RequestModule {
  postRequest(date) {
    return new Promise(function (resolve, reject) {
      request.post(
        {
          url: config.url,
          form: `PreventChromeAutocomplete=&fctrl_1=offering_guid&offering_guid=d1aea7c0b17d4a56b6e03b75ae50f8dd&fctrl_2=course_guid&course_guid=&fctrl_3=limited_to_course_guid_for_offering_guid_d1aea7c0b17d4a56b6e03b75ae50f8dd&limited_to_course_guid_for_offering_guid_d1aea7c0b17d4a56b6e03b75ae50f8dd=&fctrl_4=show_date&show_date=${date}`,
          timeout: 10000,
        },
        function (err, httpResponse, body) {
          if (err) {
            console.log(`error!: ${err}`);
            resolve(null);
          }
          if (body) {
            // console.log(body);
            resolve(body);
          }
        }
      );
    });
  }
}
