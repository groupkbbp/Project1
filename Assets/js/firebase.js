var config = {
    apiKey: "AIzaSyDviQwodBBQ2JyF90VBdsOzg3IRQC0piU4",
    authDomain: "basic-biaches.firebaseapp.com",
    databaseURL: "https://basic-biaches.firebaseio.com",
    projectId: "basic-biaches",
    storageBucket: "basic-biaches.appspot.com",
    messagingSenderId: "54066792260"
  };
  firebase.initializeApp(config);


  var database = firebase.database();
  var clickCounter = 0;

  $(".flip-card-front").on("click", function() {
    clickCounter++;

    database.ref().set({
      clickCount: clickCounter
    });
  });


  database.ref().on("value", function(snapshot) {
    console.log(snapshot.val());

    clickCounter = snapshot.val().clickCount;});