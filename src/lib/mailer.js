const nodemailer = require("nodemailer")

module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "82b8656db25ecd",
    pass: "ed26fe74a68bcd"
  }
});