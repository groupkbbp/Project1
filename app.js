//     SWIM ADVISORY API LOGIC

//API endpoint for water qality = https://data.cityofchicago.org/resource/qmqz-2xku.json

//App Token = y2iq7CNOLDfDnmu2uLY9uDQ9l
//Secret Token = jbn0-J8KwqaRBYZ0BMNFmvH1n9PvQGJgaz25

//example use of query
//https://soda.demo.socrata.com/resource/4tka-6guv.json?$where=magnitude > 3.0
//https://soda.demo.socrata.com/resource/6yvf-kk3n.json?region=Virgin Islands region&source=pr

//To filter the dataset to only return records containing a specified value for beach_name simply add a URL parameter to your URL with beach_name as the key and your specified value.


// var beachName = '?beach_name=' + "OakStreet"; //$(this).click().val()
// //beach_name is space sensititive OakStreet != Oak Street, so code to get rid of spaces potentially necessary
// console.log(beachName)
// var date = "date=2016-06-04"; //based on current day

function checkBeach(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i].beach_name) // shows the name of the results pulled
    var predLevel = data[i].predicted_level
    console.log('predLevel: ',predLevel)
    if (predLevel > 235) {
      console.log('ITS NOT SAFE TO SWIM DAWG!')
      var safetyNo = $('<div>').text('DONT SWIM DAWG');
      $('#watercond').append(safetyNo);
      

      //*****append to a div on card saying its not safe to swim
    }
    else{
      console.log('its OKAY to swim dawg')
      var safetyYes = $('<div>').text('SWIM YA LIL FISHY');
      $('#watercond').append(safetyYes);
      //******append to div on card saying OK to swim
    }
  }
}

$('.flip-card').on('click', function () {
  var beachName ='?beach_name='+ $(this).val();
  console.log('this: ',beachName);
  var test_date = "date=2016-06-04";
  var date = '';  // ***** WRITE CODE FOR DETERMINING CURRENT DATE.... momentjs?
  $.ajax({
    // url: "https://data.cityofchicago.org/resource/t62e-8nvc.json?swim_advisory=Y",
    // url: "https://data.cityofchicago.org/resource/t62e-8nvc.json"+beachName+'&'+date,
    url: "https://data.cityofchicago.org/resource/t62e-8nvc.json"+beachName+'&'+test_date,
    type: "GET",
    data: {
      "$limit": 10,
      "$$app_token": 'y2iq7CNOLDfDnmu2uLY9uDQ9l'
    }
  }).done(function (data) {
    if (data.length == 0) {
      $('#watercond').empty();  //***** DETERMINE WHICH BUTTON WAS PRESSED AND EMPTY RIGHT DIV
      console.log('No values exist for the current date. The sensors will only be monitoring from Memorial Day to Labor Day each year.')
      var noResults = $('<div>').text('No values exist for the current date. The sensors will only be monitoring from Memorial Day to Labor Day each year.');
      $('#watercond').append(noResults);
      

    }
    else{
      checkBeach(data);
    }
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log('data', data);

   


  });
})
// on click the card flips over
// ajax call made and checkBeach runs checking for pred levels and spits out response safe or unsafe to swim
// empty out div
// put response from checkBeach function into the div
 /////// how to empty out each individual div on click and not all of them
    
    //? set a class to item being clicked then use this to dtermine the ID of item being clicked and clear the div of said box


   // $(this).on('click, function'){
     
   //}





