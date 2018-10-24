import firebase from "firebase";
const config = {
    apiKey: "AIzaSyDrTxHRAfTAQKdbMJua3YN0Tc5SgP-LyD4",
    authDomain: "rgukeymanager.firebaseapp.com",
    databaseURL: "https://rgukeymanager.firebaseio.com",
    projectId: "rgukeymanager",
    storageBucket: "rgukeymanager.appspot.com",
    messagingSenderId: "469482140407"
};
firebase.initializeApp(config);
firebase.auth();
firebase.storage();
firebase.database();