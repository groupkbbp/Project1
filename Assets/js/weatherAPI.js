
var apiKEY = "5af5afe42af981e26b5ba776c7767b41";
var lat = 41.881832;
var lon = -87.623177;


$('#test').on('click', function () {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid="+ apiKEY;
    // var converterMath= ((K-273.15)*1.8)+32
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
           
            
            var tempK = response.list[18].main.temp;
            var time = response.list[0].dt_txt;
            console.log(tempK + "K");
            console.log(time);
            var tempF = ((tempK - 273.15)*1.8)+32;
            console.log(tempF + "F");
           
        //     for (var i = 0; i < results.length; i++) {
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


