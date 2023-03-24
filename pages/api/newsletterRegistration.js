import { db } from '../../config/firebaseConfig'
import { Timestamp } from 'firebase-admin/firestore'

export default async function handler(req, res) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ data: 'rejected' })
  }

  const email = body.email

  const query = await db.collection('newsletter-list').where('email', '==', email).get()
  const docs = query.docs;

  if (query.empty) {
    return new Promise((resolve, reject) => {
      db.collection('newsletter-list').add({
        email: email,
        subscribed: true,
        emailVerified: false,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
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
  } else {
    return new Promise((resolve, reject) => {
      db.collection('newsletter-list').doc(docs[0].id).update({
        subscribed: true,
        updatedAt: Timestamp.now()
      }).then((response) => {
        console.log("Data updated with id: ", docs[0].id)
        res.status(200).json({ data: 'success' })
        resolve()
      })
        .catch((error) => {
          console.log("Error updating data: ", error)
          res.status(400).json({ data: 'rejected' })
          resolve()
        })
    })
  }
}
