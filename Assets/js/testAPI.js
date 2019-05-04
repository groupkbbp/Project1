//Array of Beach Objects







var beachIDs = [{
        beach: "Oak Street",
        foodQuery: "restaurants%20near%20Oak%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJQZJQJFfTD4gRajRN4wWCges",
        locationQuery: "41.9019772,-87.6222749"
    },
    {
        beach: "North Avenue",
        foodQuery: "restaurants%20near%20North%20Avenue%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJDw9m7GbTD4gRfxvHEJFgLBs",
        locationQuery: "41.9141994,-87.6244975"
    },
    {
        beach: "Montrose",
        foodQuery: "restaurants%20near%20Montrose%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJlyqafN3TD4gRNJsjKC7Alk8",
        locationQuery: "41.9650322,-87.6347771"
    },
    {
        beach: "12th Street",
        foodQuery: "restaurants%20near%2012th%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJIfbnQHArDogRFE5PEwDHQbU",
        locationQuery: "41.8636,-87.6074"
    },
    {
        beach: "Ohio Street",
        foodQuery: "restaurants%20near%20Ohio%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJwR5paVMrDogRhMIXATY07a4",
        locationQuery: "41.8935,-87.6129"
    },
    {
        beach: "Foster",
        foodQuery: "restaurants%20near%20Foster%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJt9K2mXzRD4gRn6RCpGid0n0",
        locationQuery: "41.9800,-87.6499"
    },
    {
        beach: "Hollywood",
        foodQuery: "restaurants%20near%20Hollywood%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJYwGn4HDRD4gRJ1_Oj6Oh-R8",
        locationQuery: "41.9862,-87.6520"
    },
    {
        beach: "63rd Street",
        foodQuery: "restaurants%20near%2063rd%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        beachQuery: "place_id:ChIJ1_rYG68pDogR0iUE_kgJ2cc",
        locationQuery: "41.7820,-87.5733"
    }
];

// Onclick Event
$(".flip-card").on("click", function () {
    //can use this for cards
    console.log("this on! ", $(this).attr("data-beach-id"));

    var selection = "North Avenue"
    //Loop through Array
    var values = Object.values(beachIDs);
    console.log(values);

    //replace oak street with value from THIS id or value
    for (var i = 0; i < values.length; i++) {
        if (values[i].beach == selection) {

            //Find Matching Object Values in Array 
            var foodQueryString = values[i].foodQuery;
            console.log("FQ: " + foodQueryString);
            var locationQueryString = values[i].locationQuery;
            console.log("LQ: " + locationQueryString);

            //Google Query String
            var beachWeather = "https://darksky.net/widget/graph-bar/" + locationQueryString + "/us12/en.js?width=100%&height=400&title=FullForecast&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=333333&currentDetailsOption=true"
            console.log("BW: " + beachWeather);

            //Dark Skies Query String
            var beachMap = "https://www.google.com/maps/embed/v1/search?q=" + foodQueryString + "&key=AIzaSyDQUzAUZX_8MqKnkg5Ejiw-yWaRW3WoP9k"
            console.log("BM: " + beachMap);

            //Select Parent Container
            var parent = $(".map");

            //Google Map API Add
            var child = $("<iframe>").attr("width", "500").attr("height", "1000").attr("style", "border:0").attr("src", beachMap);

            //Dark Skies API Add
            var child2 = $("<iframe>").attr("width", "500").attr("height", "1000").attr("style", "border:0").attr("src", beachWeather);
            //var child2 = $("<script>").attr("width", "500").attr("height", "1000").attr("style", "border:0").attr("src", beachWeather); 

            parent.empty();
            parent.append(child);
        }
    }
})