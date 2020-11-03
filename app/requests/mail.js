import pkg from "nodemailer";
// async..await is not allowed in global scope, must use a wrapper

export default class Mail {
  async sendEmail() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = pkg.createTransport({
      host: "email-smtp.us-west-2.amazonaws.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "", // generated ethereal user
        pass: "", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Hunter Krieg 👻" <kriegster108@gmail.com>', // sender address
      to: "kriegster108@gmail.com, britt.porter@yahoo.com", // list of receivers
      subject: "Reservation available at Englewood Location", // Subject line
      html:
        "Hey There!<br>There is a reservation available at Englewood Location for this upcoming week! Book us now!!!!! <br> Love you babe: Hunty <br><br><b>Reservation Link:</b> https://app.rockgympro.com/b/widget/?a=offering&offering_guid=d1aea7c0b17d4a56b6e03b75ae50f8dd&random=5fa0e8254dc62&iframeid=&mode=p", // html body
    });

    console.log("Message sent: %s", info.messageId);
  }
}
