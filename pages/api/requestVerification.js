import { sendEmail } from '../../components/server/sendEmail'
const storage = require('node-persist')

export default async function handler(req, res) {
  const email = req.body.email

  var string = '0123456789'
  var otp = ''
  var length = string.length

  await storage.init({ dir: '/tmp/node-persist/', logging: true, ttl: 600000 })
  let data = await storage.getItem(email)

  if (data) {
    otp = data
  } else {
    for (var i = 0; i < 6; i++) {
      otp += string[Math.floor(Math.random() * length)]
    }
  }

  await sendEmail(email, otp)
    .then(response => {
      !data && storage.setItem(email, otp)
      getOtp(email)
      return res.status(200).json({ data: 'success' })
    })
    .catch(error => {
      console.log(error)
      return res.status(400).json({ data: 'rejected' })
    })
}

async function getOtp(email) {
  await storage.init({ dir: '/tmp/node-persist', logging: true, ttl: 600000 })
  let storageOtp = await storage.getItem(email)
  console.log(storageOtp)
}
