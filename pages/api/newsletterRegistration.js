import { db } from '../../components/firebase'
import { Timestamp } from 'firebase-admin/firestore'

export default function handler(req, res) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ data: 'rejected' })
  }

  const email = body.email

  return new Promise((resolve, reject) => {
    db.collection('newsletter-list').add({
      email: email,
      createdAt: Timestamp.now()
    }).then((response) => {
      console.log("Data registered with id: ", response.id)
      res.status(200).json({ data: 'success' })
      resolve()
    })
    .catch((error) => {
      console.log("Error registering data: ", error)
      res.status(400).json({ data: 'rejected' })
      resolve()
    })
  })
}