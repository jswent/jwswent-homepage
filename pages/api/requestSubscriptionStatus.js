import { db } from "../../config/firebaseConfig"
import { Timestamp } from "firebase-admin/firestore"

export default async function handler(req, res) {
  const email = req.body.email
  const uid = req.body.uid

  const query = await db.collection('newsletter-list').where('email', '==', email).get()
  if (query.empty) {
    return res.status(400).json({ data: 'rejected' })
  }
  const docData = query.docs[0].data()

  const isSubscribed = 'subscribed' in docData ? docData.subscribed : true

  if (!'subscribed' in docData) {
    await db.collection('newsletter-list').doc(query.docs[0].id).update({
      subscribed: true,
      updatedAt: Timestamp.now()
    })
  }

  if (docData.uid == uid) {
    return res.status(200).json({ data: 'success', subscribed: isSubscribed })
  }

}