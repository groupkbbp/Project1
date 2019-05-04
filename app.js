// //     SWIM ADVISORY API LOGIC

// //API endpoint for water qality = https://data.cityofchicago.org/resource/qmqz-2xku.json

// //App Token = y2iq7CNOLDfDnmu2uLY9uDQ9l
// //Secret Token = jbn0-J8KwqaRBYZ0BMNFmvH1n9PvQGJgaz25

// //example use of query
// //https://soda.demo.socrata.com/resource/4tka-6guv.json?$where=magnitude > 3.0
// //https://soda.demo.socrata.com/resource/6yvf-kk3n.json?region=Virgin Islands region&source=pr

// //To filter the dataset to only return records containing a specified value for beach_name simply add a URL parameter to your URL with beach_name as the key and your specified value.


// // var beachName = '?beach_name=' + "OakStreet"; //$(this).click().val()
// // //beach_name is space sensititive OakStreet != Oak Street, so code to get rid of spaces potentially necessary

// function checkBeach(data) {
//   for (var i = 0; i < data.length; i++) {
//     console.log(data[i].beach_name) // shows the name of the results pulled
//     var predLevel = data[i].predicted_level
//     var beachId = $(this).attr("data-beach-id");  
//     console.log('beachId: ',beachId)
//     console.log('predLevel: ',predLevel)
//     if (predLevel > 235) {
//       console.log('ITS NOT SAFE TO SWIM DAWG!')
//       var safetyNo = $('<div>').text('DONT SWIM DAWG');
//       $('#watercond'+beachId).append(safetyNo);

//       //*****append to a div on card saying its not safe to swim
//     }
//     else{
//       console.log('its OKAY to swim dawg')
//       var safetyYes = $('<div>').text('SWIM YA LIL FISHY');
//       $('#watercond'+beachId).append(safetyYes);
//       //******append to div on card saying OK to swim
//     }
//   }
// }

$('.flip-card').on('click', function () {
 // console.log('this' + this)
  var beachName = '?beach_name=' + $(this).attr("data-beach-name");
  var beachId = $(this).attr('data-beach-id');
  //console.log('beachId', beachId)
  //console.log('beachName: ', beachName);
  var test_date = "date=2016-06-10";
  //https://data.cityofchicago.org/resource/t62e-8nvc.json?date=2016-06-04T00:00:00.000
  var now = moment().format('YYYY-MM-DD');
  var date = 'date=' + now


  // console.log(date)
  //****  MAKE 1 RESULT WITH A UNSAFE TO SWIM DATE
  $.ajax({
    // url: "https://data.cityofchicago.org/resource/t62e-8nvc.json?swim_advisory=Y",
    // url: "https://data.cityofchicago.org/resource/t62e-8nvc.json"+beachName+'&'+date,     //for when sensors come on
    url: "https://data.cityofchicago.org/resource/t62e-8nvc.json" + beachName + '&' + test_date,
    type: "GET",
    data: {
      "$limit": 1,
      "$$app_token": 'y2iq7CNOLDfDnmu2uLY9uDQ9l'
    }
  }).done(function (data) {
    if (data.length == 0) { // will be blue
      console.log('No values exist for the current date. The sensors will only be monitoring from Memorial Day to Labor Day each year.');
      $('#watercond' + beachId).empty();
      var noResults = $('<div>').text('No data for the current date.');
      $('#watercond' + beachId).append(noResults);
    }
    else {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i].beach_name)
        var predLevel = data[i].predicted_level
       // console.log('beachId2: ', beachId)
       // console.log('predLevel: ', predLevel)

        if (predLevel > 235) { //will be red 
          $('#watercond' + beachId).empty();
          var safetyNo = $('<div>').addClass("divclass2").text('UNSAFE TO SWIM');
          $('#watercond' + beachId).append(safetyNo);
        }
        else { // green
          $('#watercond' + beachId).empty();
          var safetyYes = $('<div>').addClass("divclass").text('SAFE TO SWIM');
          $('#watercond' + beachId).append(safetyYes);
        }
      }
    }
    //console.log("Retrieved " + data.length + " records from the dataset!");
    console.log('data', data);
  });
})

