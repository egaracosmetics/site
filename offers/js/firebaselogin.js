$(document).ready(function(){
//upload files for nannies
    console.log("Yed Na");

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAUwTV4cihfiqzHd6PxzlxV9KsP6N8k0uY", 
    authDomain: "chameleon-c7b5b.firebaseapp.com", 
    databaseURL: "https://chameleon-c7b5b.firebaseio.com", 
    projectId: "chameleon-c7b5b",
    storageBucket: "chameleon-c7b5b.appspot.com", 
    //messagingSenderId: "668326033585", 
    appId: "1:768608852567:android:7995ac167ddc7eea17a112",
    // measurementId: "G-T1S64VE1B2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 // firebase.analytics();

  console.log("firebase loaded");


  //login User

       firebase.auth().onAuthStateChanged(function(user) {
         if (user) {
           // User is signed in.
           var isAnonymous = user.isAnonymous;
           var uid = user.uid;
           console.log("user is signed in:" + uid);
           localStorage.setItem("userid", uid);
           // ...
           
        //   got();
         } else {

             //signin User AnnonymoisAnonymously

firebase.auth().signInAnonymously().catch(function(error) {
         // Handle Errors here.
         var errorCode = error.code;
         var errorMessage = error.message;
         // ...
         console.log("errorCode:" +errorCode);
          console.log("errorMessage:" +errorMessage);
       });
         }
         // ...
       });
});


