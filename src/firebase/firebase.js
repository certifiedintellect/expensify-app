import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHQvNdabfX_XR6b9KAngdS6fHtEz-twAk",
  authDomain: "expensify-79493.firebaseapp.com",
  databaseURL: "https://expensify-79493-default-rtdb.firebaseio.com",
  projectId: "expensify-79493",
  storageBucket: "expensify-79493.appspot.com",
  messagingSenderId: "239614355339",
  appId: "1:239614355339:web:2ec23dcd234e8b011b718e",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

/* database.ref().once('value').then((snapshot) => {
    const val = snapshot.val();
    console.log(val)
}) */

const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val);
})

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