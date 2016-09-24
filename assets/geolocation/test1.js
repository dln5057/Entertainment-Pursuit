
    var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?query=restaurants+Pennsylvania&key=AIzaSyB57N6LfRt0KPZjKV9f0U-rxCaNF4KLL-k";
      

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;

    console.log(queryURL);
      console.log(response);
    })