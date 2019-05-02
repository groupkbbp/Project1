// //     SWIM ADVISORY API LOGIC

$('.flip-card').on('click', function () {
  var beachName = '?beach_name=' + $(this).attr("data-beach-name");
  var beachId = $(this).attr('data-beach-id');
  var test_date = "date=2016-06-10";
  //https://data.cityofchicago.org/resource/t62e-8nvc.json?date=2016-06-04T00:00:00.000
  var now = moment().format('YYYY-MM-DD');
  var date = 'date='+now
  
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
        console.log('predLevel: ', predLevel)

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

