
var apiKEY = "5af5afe42af981e26b5ba776c7767b41";
var lat = 41.881832;
var lon = -87.623177;
var beachLocations = [
    {
        beach: "Oak Street",
        lat: 41.9030,
        lon: 87.6228
    },
    {
        beach: "North Ave",
        lat: 41.9148,
        lon: 87.6251
    },
    {
        beach: "Montrose",
        lat: 41.9663,
        lon: 87.6372
    }
];

var beachSelected = $("#beachSelected").val()

$('#send').on('click', function () {

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + apiKEY;
    // var converterMath= ((K-273.15)*1.8)+32
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);

            var tempK = response.list[0].main.temp;
            var time = response.list[0].dt_txt;
            var tempF = ((tempK - 273.15) * 1.8) + 32;

            for (var i = 0; i < 3; i++) {
                time = response.list[i].dt_txt
                tempK = response.list[i].main.temp
                console.log("Time: " + time + " Temp: " + tempF)
            };
            // console.log(time)
            //         var gifDiv = $("<div>");
            //         var rating = results[i].rating;
            //         console.log(rating);

            //         var p = $("<p>").text("Rating: " + rating);

            //         var playerImage = $("<img>");
            //         playerImage.attr("src", results[i].images.fixed_height_still.url).attr("data-state", "still").attr("data-still", results[i].images.fixed_height_still.url).attr("data-animate", results[i].images.fixed_height.url).attr("class", "gif img-fluid");

            //         gifDiv.prepend(p);
            //         gifDiv.prepend(playerImage);

            //         $("#gifReturn").prepend(gifDiv);


        })





});


