
//API Queries 
//var beachMap = "https://www.google.com/maps/embed/v1/search?q=" + foodQueryString + "&key=AIzaSyDQUzAUZX_8MqKnkg5Ejiw-yWaRW3WoP9k"
//var beachWeather = "https://darksky.net/widget/graph-bar/" + locationQueryString + "/us12/en.js?width=100%&height=400&title=FullForecast&textColor=333333&bgColor=FFFFFF&transparency=false&skyColor=undefined&fontFamily=Default&customFont=&units=us&timeColor=333333&tempColor=333333&currentDetailsOption=true"

//Variables
var beachIDs = [
    {
        beach: "Oak Street",
        foodQuery: "restaurants%20near%20Oak%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        locationQuery: "41.9030,-87.6228"
    },
    {
        beach: "North Ave",
        foodQuery: "restaurants%20near%20North%20Avenue%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        locationQuery: "41.9148,-87.6251"
    },
    {
        beach: "Montrose",
        foodQuery: "restaurants%20near%20Montrose%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        locationQuery: "41.9663,-87.6372"
    },
    {
        beach: "12th Street",
        foodQuery: "restaurants%20near%2012th%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        //locationQuery: "41.9148,-87.6251"
    },
    {
        beach: "Ohio Street",
        foodQuery: "restaurants%20near%20Ohio%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        //locationQuery: "41.9148,-87.6251"
    },
    {
        beach: "Foster",
        foodQuery: "restaurants%20near%20Foster%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        //locationQuery: "41.9148,-87.6251"
    },
    {
        beach: "Hollywood",
        foodQuery: "restaurants%20near%20Hollywood%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        //locationQuery: "41.9148,-87.6251"
    },
    {
        beach: "63rd Street",
        foodQuery: "restaurants%20near%2063rd%20Street%20Beach%2C%20Chicago%2C%20Illinois%2C%20USA",
        //locationQuery: "41.9148,-87.6251"
    }
];

// Onclick Event
$("button").on("click", function () {
    console.log(this.id)

//Beach Dropdown Selection
    var e = document.getElementById("beachSelect");
    var selection = e.options[e.selectedIndex].value;
    document.getElementById("beachDisplay").innerHTML = selection;

//Loop through Array
    var values = Object.values(beachIDs)
    console.log(values)

//replace oak street with value from THIS id or value
    for (var i = 0; i < values.length; i++) {
        if (values[i].beach == selection) {
            console.log(values[i].foodQuery)
            var foodQueryString = values[i].foodQuery;
            var beachMap = "https://www.google.com/maps/embed/v1/search?q=" + foodQueryString + "&key=AIzaSyDQUzAUZX_8MqKnkg5Ejiw-yWaRW3WoP9k"
            var parent = $(".parent")
            var child = $("<iframe>").attr("width", "500").attr("height", "1000").attr("style", "border:0").attr("src", beachMap)
            parent.empty()
            parent.append(child);
        }
    }
});


