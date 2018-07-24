import * as firebase from 'firebase';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// ------------------------------------------
// // set data: use set
// database.ref().set({
//     name: 'Chloe Su',
//     age: 24,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Taipei',
//         country: 'Taiwan'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('This failed. ', e);
// });

// // remove data: use remove
// database.ref()
//     .remove()
//     .then(() => {
//         console.log('remove isSingle successfully');
//     })
//     .catch(() => {
//         console.log('fail to remove isSingle');
//     });

// // update data(add & remove): use update
// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// // fetching data: use once
// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     });

// // subscribe to the data change: use on
// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//   console.log('error with data fetching', e);
// })

// // unsubscribe to the data change: use off
// setTimeout(() => {
//     database.ref().off(onValueChange); 
// }, 7000)

// // add sth to an array data: use push
// database.ref('notes').push({
//     title: 'Course Topics',
//     body: 'React Native'
// });

// database.ref('notes/-LHHQb1mneI7rt20ifkF').remove();

// // turn snapshot object into an array: use forEach
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// database.ref('expenses')
//     .on(
//         'value',
//         (snapshot) => {
//             const expenses = [];
//             snapshot.forEach((childSnapshot) => {
//                 expenses.push({
//                     id: childSnapshot.key,
//                     ...childSnapshot.val()
//                 })
//             })
//             console.log(expenses);
//         },
//         (e) => {
//             console.log('error with data fetching', e);
//         })

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });