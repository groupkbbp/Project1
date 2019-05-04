//Array of Beach Objects
var beachIDs = [{
        dataBeachName: "Montrose",
        beach: "Montrose Beach",
        foodQuery: "restaurants%20near%20Montrose%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJlyqafN3TD4gRNJsjKC7Alk8",
        locationQuery: "41.9650322,-87.6347771",
        latQuery: "",
        lonQuery: ""
    },
    {
        dataBeachName: "OakStreet",
        beach: "Oak Street Beach",
        foodQuery: "restaurants%20near%20Oak%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJQZJQJFfTD4gRajRN4wWCges",
        locationQuery: "41.9019772,-87.6222749",
        latQuery: "",
        lonQuery: ""
    },
    {
        dataBeachName: "NorthAve",
        beach: "North Avenue Beach",
        foodQuery: "restaurants%20near%20North%20Avenue%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJDw9m7GbTD4gRfxvHEJFgLBs",
        locationQuery: "41.9141994,-87.6244975",
        latQuery: "41.9141994",
        lonQuery: "-87.6244975"
    },
    {
        dataBeachName: "12thStreet",
        beach: "12th Street Beach",
        foodQuery: "restaurants%20near%2012th%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJIfbnQHArDogRFE5PEwDHQbU",
        locationQuery: "41.8636,-87.6074",
        latQuery: "",
        lonQuery: ""
    },
    {
        dataBeachName: "Ohio",
        beach: "Ohio Street Beach",
        foodQuery: "restaurants%20near%20Ohio%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJwR5paVMrDogRhMIXATY07a4",
        locationQuery: "41.8935,-87.6129",
        latQuery: "",
        lonQuery: "",
        counter: ""
    },
    {
        dataBeachName: "Osterman",
        beach: "Hollywood",
        foodQuery: "restaurants%20near%20Hollywood%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJYwGn4HDRD4gRJ1_Oj6Oh-R8",
        locationQuery: "41.9862,-87.6520",
        latQuery: "",
        lonQuery: ""
    },
    {
        dataBeachName: "Foster",
        beach: "Foster",
        foodQuery: "restaurants%20near%20Foster%20Beach%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJt9K2mXzRD4gRn6RCpGid0n0",
        locationQuery: "41.9800,-87.6499",
        latQuery: "",
        lonQuery: ""
    },
    {
        dataBeachName: "63rdStreet",
        beach: "63rd Street",
        foodQuery: "restaurants%20near%2063rd%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJ1_rYG68pDogR0iUE_kgJ2cc",
        locationQuery: "41.7820,-87.5733",
        latQuery: "",
        lonQuery: ""
    }
];

//On click Event (Toggle)
$(".flip-card").on("click", function () {
    console.log($(this).attr("data-toggle"));
    //validates which side of the card is clicked 
    if ($(this).attr("data-toggle") == "front") {
        //Get card Selection
        var currentBeach = $(this).attr("data-beach-name");
        //Var for Array to Loop through
        var values = Object.values(beachIDs);
        console.log(values);
        //Toggles flip card status
        $(this).attr("data-toggle", "back");
        //Loops through Array --- Matches Button with beach location details --- sets location var for API call -- Calls API fucntion
        for (i = 0; i < values.length; i++) {
            if (values[i].dataBeachName == currentBeach) {
                var locationQueryString = values[i].locationQuery;
                console.log(locationQueryString);
                var queryURL = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/4a4040a2a6849005fa4c1146c74f1d8f/" + locationQueryString;
                //Dark Sky API Call with Selected Beach
                darkSkyCall();
            }
        };
        //Makes API call --- updates back of flip card with current data
        function darkSkyCall() {
            $.ajax({
                    url: queryURL,
                    method: "GET",
                })
                .then(function (response) {
                    console.log(response);
                    console.log(response.currently.apparentTemperature)
                    var today = response.daily
                    var parent = $("#weather" + currentBeach)
                    var day = $("<div>").text("Friday");
                    var sunRise = $("<div>").text("Sunrise " +moment.unix(today.data[0].sunriseTime).format("LT"));
                    var sunSet = $("<div>").text("Sunset " + moment.unix(today.data[0].sunsetTime).format("LT"));
                    var icon = $("<div>").text(today.data[0].icon);
                    var temp = $("<div>").text(response.currently.apparentTemperature + "°");
                    var highTemp = $("<div>").text("Hi " + today.data[0].apparentTemperatureHigh + "°");
                    var lowTemp = $("<div>").text("Lo " + today.data[0].apparentTemperatureLow + "°");
                    var humidity = $("<div>").text("Humidity " + (today.data[0].humidity * 100) + "%");
                    var summary = $("<div>").text(today.data[0].summary);
                    parent.append(day,sunRise,sunSet, icon, temp, highTemp, lowTemp, humidity, summary)

                })
        }
        //if back of the card is click clear div and do not make new API call 
    } else {
        $(this).attr("data-toggle", "front")
        $("#weather" + $(this).attr("data-beach-name")).empty();
    };
});

// Google iframe update on Click 
$('body').on('click', '.tr', function () {
            var beachLocation = $(this).attr("data-value");
            console.log(beachLocation)
            var values = Object.values(beachIDs);
            for (i = 0; i < values.length; i++) {
                if (values[i].dataBeachName == beachLocation) {
                    var foodQueryString = values[i].foodQuery;
                    console.log(foodQueryString);
                    var googleMap = "https://www.google.com/maps/embed/v1/search?q=" + foodQueryString + "&key=AIzaSyDQUzAUZX_8MqKnkg5Ejiw-yWaRW3WoP9k"
                    var map = $("#map");
                    map.empty();
                    var beachMap = $("<iframe>").attr("style", "border:0; width: 100%; height: 100%").attr("src", googleMap);
                    map.append(beachMap);
                }
            }
                });