import { db } from '../../components/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

export default function handler(req, res) {
  const body = req.body

  if (!body.email) {
    return res.status(400).json({ data: 'rejected' })
  }

  const email = body.email

  const result = registerFirebase(email)

  result ? res.status(200).json({ "data": "success" }) : res.status(400).json({ "data": "rejected"} )
}

async function registerFirebase(email) {
  try {
    await addDoc(collection(db, 'newsletter-list'), {
      email: email,
      createdAt: Timestamp.now()
    })
    return true
  } catch (err) {
    return false
  }
}
