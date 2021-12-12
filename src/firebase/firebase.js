import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

export { firebase, database as default };

/* database.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val)
}) */
/* 
const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val);
})
 */
/* setTimeout(() => {
    database.ref().off('value', onValueChange)
}, 5000); */

/* 
database.ref().set({
  name: "Nikhil Marabathula",
  age: 25,
  isSingle: true,
  location: {
    city: "Bangalore",
    country: "India",
  },
}).then(() => {
    console.log("data is saved");
}).catch((e) => {
    console.log("this failed ", e)
})

// removing data from db

database.ref('isSingle').remove().then(() => {
    console.log("data is removed")
}).catch((e) => {
    console.log("cant be removed ", e);
})
 */
/* database.ref("age").set(26);
database.ref("attributes").set({
  height: 5.7,
  weight: 70,
});
 */
