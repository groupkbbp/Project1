// app for project

//API endpoint for water qality = https://data.cityofchicago.org/resource/qmqz-2xku.json

//API endpoint for beach weather = https://data.cityofchicago.org/resource/k7hf-8y75.json
//App Token = y2iq7CNOLDfDnmu2uLY9uDQ9l
//Secret Token = jbn0-J8KwqaRBYZ0BMNFmvH1n9PvQGJgaz25

https://data.cityofchicago.org/resource/t62e-8nvc.json

//example parameter
//https://data.seattle.gov/resource/3k2p-39jp.json?$$app_token=APP_TOKEN

//example use of query
//https://soda.demo.socrata.com/resource/4tka-6guv.json?$where=magnitude > 3.0
//https://soda.demo.socrata.com/resource/6yvf-kk3n.json?region=Virgin Islands region&source=pr

//To filter the dataset to only return records containing a specified value for beach_name simply add a URL parameter to your URL with beach_name as the key and your specified value. For example:

var beachName = '?beach_name='+"OakStreet"; //$(this).click().val()
//beach_name is space sensititive OakStreet != Oak Street, so code to get rid of spaces potentially necessary
console.log(beachName)
var date = "?$where=date between '2015-01-10T12:00:00' and '2015-01-10T14:00:00'"; //based on current day

$.ajax({
  url: "https://data.cityofchicago.org/resource/t62e-8nvc.json",
  type: "GET",
  data: {
    "$limit": 10,
    "$$app_token": 'y2iq7CNOLDfDnmu2uLY9uDQ9l'
  }
}).done(function (data) {
  alert("Retrieved " + data.length + " records from the dataset!");
  console.log(data);
  searchBeach(data);
  
});

function searchBeach(data){
  for(var i=0; i<data.length; i++){
    console.log(data[i].beach_name) // shows the name of the results pulled
    var beach_name = data[i].beach_name
    if(beachName == beach_name){
      console.log('the correct beach was found')
    }
  }
}
function getName(){
  console.log('name'+this.val())
  console.log('beachName: '+beachName)
}


//working example
//https://data.cityofchicago.org/resource/k7hf-8y75.json?$where=measurement_timestamp between '2018-04-10T09:00:00.000' and '2018-04-23T00:00.000'

//?$where=date between '2015-01-10T12:00:00' and '2015-01-10T14:00:00'