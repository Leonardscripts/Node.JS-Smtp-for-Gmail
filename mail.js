const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

// Mailgun.com accesss keys
const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: process.env.DOMAIN
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

// Send outgoing mail
const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: "email",
    to: "where you want it to go @gmail.com",
    subject: "nodemail Contact",
    text: "Hello"
  };

  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};
module.exports = sendMail;
