import { db } from "../../config/firebaseConfig"
import { Timestamp } from "firebase-admin/firestore"

export default async function handler(req, res) {
  const email = req.body.email
  const uid = req.body.uid

  const query = await db.collection('newsletter-list').where('email', '==', email).get()
  if (query.empty) {
    return res.status(400).json({ data: 'unknown' })
  }
  const docData = query.docs[0].data()

  if (docData.uid == uid) {
    await db.collection('newsletter-list').doc(query.docs[0].id).update({
      subscribed: false,
      updatedAt: Timestamp.now()
    })
    return res.status(200).json({ data: 'success' })
  } else {
    return res.status(400).json({ data: 'rejected' })
  }
}
