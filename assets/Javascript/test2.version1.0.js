///// empty variable set for userlocation
    var lat=0;
    var long=0;


    function queryUrlConstructor (lat, long) {
      var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=venues&location="+lat+","+long+"&radius=50000&key=AIzaSyB57N6LfRt0KPZjKV9f0U-rxCaNF4KLL-k";
      return queryURL;

    } 
    

//     //50,000 meters radius search/////////// user location find events nearby this user///////////////////////////
function getMuseum (queryURL) {
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;
    console.log(queryURL);
    console.log(response);
  });
}  

  var q = queryUrlConstructor("test", "test");
  console.log(q);


 

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    lat = position.coords.latitude;
    long = position.coords.longitude;
    var queryUrl = queryUrlConstructor(lat, long);
    console.log(queryUrl);
    getMuseum(queryUrl);
    console.log(queryUrl); 
    console.log(lat + "," + long)
    initMap();
}



getLocation();

/////////////////Add marker/////////////////////current one that works////
  function initMap() {
        var userPosition = {lat: lat, lng: long}
        console.log(userPosition)

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: userPosition
        });
        var marker = new google.maps.Marker({
        map: map,
        position: userPosition,
         title: 'I am here'
        });
        

      }

