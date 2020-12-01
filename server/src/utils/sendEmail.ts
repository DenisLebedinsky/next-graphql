import nodemailer from "nodemailer";

export async function sendEmail(to: string, html: string) {
  //   let testAccount = await nodemailer.createTestAccount();
  //   console.log("test account", testAccount);

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "yskadbp6gt4hpxs2@ethereal.email", // generated ethereal user
      pass: "91hE1SEZS9jCCPEkmB", // generated ethereal password
    },
  });

  //url https://ethereal.email/message/X6mvTT4CQi0A8q88X6mvTu0lCzS5FulnAAAAATrLytm3EvCeI5I7zL6EOX4

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to,
    subject: "change password",
    html,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
