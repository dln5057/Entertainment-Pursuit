var queryURL = "https://crossorigin.me/https://maps.googleapis.com/maps/api/place/nearbysearch/json?keyword=museums&location=61.205414,-149.891435&radius=50000&key=AIzaSyB57N6LfRt0KPZjKV9f0U-rxCaNF4KLL-k";
      

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
    var results = response.data;

    console.log(queryURL);
      console.log(response);
    })

