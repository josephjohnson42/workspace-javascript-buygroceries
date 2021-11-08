// Import stylesheets
import './style.css';

// Import javascript files
import './js/add-element.js';

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import * as firebaseui from 'firebaseui';

//  Code for later database connection Please ignore.

// Add Firebase project configuration object here
var firebaseConfig = {
  apiKey: 'AIzaSyBKpDfpZ-E0zVh9-Iw5GgO94wqiktFKa08',
  authDomain: 'csci225-josephjohnson.firebaseapp.com',
  projectId: 'csci225-josephjohnson',
  storageBucket: 'csci225-josephjohnson.appspot.com',
  messagingSenderId: '449711620730',
  appId: '1:449711620730:web:57d0b17e63f389722f71c3',
  measurementId: 'G-PPGN5EDK91',
};

firebase.initializeApp(firebaseConfig);

// Save the list to database
$('#save').click(function () {
  // document.querySelectorAll('li') ==> nodelist
  // for loop to go through each nodelist
  // and then get the text content

  $('li').each(function () {
    var value = $(this).text();
    console.log(value);

    firebase.firestore().collection('groceryList').add({
      item: value, //?
      name: "gary"
    });
  });
});
