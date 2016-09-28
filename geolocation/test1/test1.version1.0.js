    var lat=0;
    var long=0;


    function queryUrlConstructor (lat, long) {
      var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=museums&location="+lat+","+long+"&radius=50000&key=AIzaSyB57N6LfRt0KPZjKV9f0U-rxCaNF4KLL-k";
      return queryURL;

    } 
    

//     //50,000 meters///////////
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
    // var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    // +latlon+"&zoom=14&size=400x300&sensor=false";
    // document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
    console.log(lat + "," + long)
}


getLocation();
////////////////////////////////////////////////////////////////create google map and show user at current location//////////
 // function initMap() {
 //        var map = new google.maps.Map(document.getElementById('map'), {
 //          center: {lat: -34.397, lng: 150.644},
 //          zoom: 6
 //        });
 //        var infoWindow = new google.maps.InfoWindow({map: map});

 //        // Try HTML5 geolocation.
 //        if (navigator.geolocation) {
 //          navigator.geolocation.getCurrentPosition(function(position) {
 //            var pos = {lat, long}

 //            infoWindow.setPosition(pos);
 //            infoWindow.setContent('Location found.');
 //            map.setCenter(pos);
 //          }, function() {
 //            handleLocationError(true, infoWindow, map.getCenter());
 //          });
 //        } else {
 //          // Browser doesn't support Geolocation
 //          handleLocationError(false, infoWindow, map.getCenter());
 //        }
 //      }

 //      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
 //        infoWindow.setPosition(pos);
 //        infoWindow.setContent(browserHasGeolocation ?
 //                              'Error: The Geolocation service failed.' :
 //                              'Error: Your browser doesn\'t support geolocation.');
 //      }
 //      initMap()