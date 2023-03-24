const nodemailer = require('nodemailer')
import generateEmailTemplate from './emailTemplate';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "service@jwswent.com",
    pass: process.env.SERVICE_MAIL_PASSWORD,
  },
});

export async function sendEmail(email, code) {
  const emailContent = generateEmailTemplate(code)
  const mailOptions = {
    from: 'James Swent <no-reply@jwswent.com>',
    to: email,
    subject: 'Email Verification',
    html: emailContent,
  }

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log("Email sent to ", email);
        resolve(info)
      }
    })
  })
}