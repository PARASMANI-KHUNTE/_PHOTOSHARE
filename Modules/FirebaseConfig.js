const dotenv = require('dotenv');
dotenv.config();
// const firebase = require('firebase/app');
// require('firebase/storage');

// // Initialize Firebase with your credentials
// const firebaseConfig = {
//   apiKey: process.env.apiKey,
//   authDomain: process.env.authDomain,
//   projectId: process.env.projectId,
//   storageBucket: process.env.storageBucket,
//   messagingSenderId: process.env.messagingSenderId,
//   appId: process.env.appId
// };

// firebase.initializeApp(firebaseConfig);
// // Export the Firebase storage object
// const storage = firebase.storage();
// module.exports = storage;
const admin = require('firebase-admin');

const serviceAccountPath = '/etc/secrets/ggvians-2c0ed-firebase-adminsdk-a9cow-626cd394ae.json';

// Load the service account from the secret file path
const serviceAccount = require(serviceAccountPath);


// Initialize the Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.storageBucket // Replace with your Firebase project storage bucket
});

// Firebase Storage instance
const bucket = admin.storage().bucket();

module.exports = bucket;
