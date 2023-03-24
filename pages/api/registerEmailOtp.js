const storage = require('node-persist')
import { db, auth } from '../../config/firebaseConfig'
import { Timestamp } from 'firebase-admin/firestore'

export default async function handler(req, res) {
  const email = req.body.email

  const serverOtp = await storage.getItem(req.body.email)
  const clientOtp = req.body.otp

  var user = {
    uid: null,
    isPresent: false
  }

  if (serverOtp === clientOtp) {
    try {
      await auth
        .getUserByEmail(email)
        .then((userRecord) => {
          console.log(userRecord)
          user.uid = userRecord.uid
          user.isPresent = true
          setDocUid(email, user.uid)
        })
        .catch((error) => {
          console.log(error)
          user.isPresent = false
        })
      console.log(user)

      if (user.isPresent) {
        console.log('Creating custom Token')
        await auth
          .createCustomToken(user.uid)
          .then((cToken) => {
            storage.removeItem(email)
            return res.status(200).json({ customToken: cToken })
          })
          .catch((error) => {
            console.log(error)
            throw new Error("Error creating custom token")
          })
      } else {
        await auth
          .createUser({
            email: email,
            emailVerified: true,
            displayName: email,
          })
          .then((userRecord) => {
            console.log(userRecord)
            user.uid = userRecord.uid
            user.isPresent = true
            setDocUid(email, user.uid)
          })
          .catch((error) => {
            throw new Error(error.message)
          })

        await auth.createCustomToken(user.uid).then((cToken) => {
          storage.removeItem(email)
          return res.status(200).json({ customToken: cToken })
        })
      }
    } catch (error) {
      return res.status(400).json({ message: error.message })
    }
  } else {
    return res.status(400).json({ message: 'rejected' })
  }
}

async function setDocUid(email, uid) {
  const query = await db.collection('newsletter-list').where('email', '==', email).get()
  if (query.empty) {
    db.collection('newsletter-list').add({
      email: email,
      uid: uid,
      subscribed: false,
      emailVerified: true,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now()
    }).then((response) => {
      console.log("Data registered with id: ", response.id)
    }).catch((error) => {
      console.log("Error registering data: ", error)
    })
  } else if (!query.docs[0].data().uid) {
    db.collection('newsletter-list').doc(query.docs[0].id).update({
      uid: uid,
      updatedAt: Timestamp.now()
    }).then((response) => {
      console.log("Data updated with id: ", query.docs[0].id)
    }).catch((error) => {
      console.log("Error updating data: ", error)
    })
  }
}
