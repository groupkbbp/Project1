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
      //*****append to a div on card saying its not safe to swim
    }
    else{
      console.log('its OKAY to swim dawg')
      //******append to div on card saying OK to swim
    }
  }
}

$('button').on('click', function () {
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
      console.log('NO VALUES EXIST FOR THIS TIME!')
    }
    alert("Retrieved " + data.length + " records from the dataset!");
    console.log('data', data);

    checkBeach(data);


  });
})


//working example
//https://data.cityofchicago.org/resource/k7hf-8y75.json?$where=measurement_timestamp between '2018-04-10T09:00:00.000' and '2018-04-23T00:00.000'

//?$where=date between '2015-01-10T12:00:00' and '2015-01-10T14:00:00'

// https://data.cityofchicago.org/resource/t62e-8nvc.json?date=2016-06-04T00:00:00.000    initial working code
// https://data.cityofchicago.org/resource/t62e-8nvc.json?date=2016-06-04    works without the exact time
// https://data.cityofchicago.org/resource/t62e-8nvc.json?swim_advisory=N