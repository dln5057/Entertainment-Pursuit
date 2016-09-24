console.log("loaded");

var queryURL = "https://app.ticketmaster.com/discovery/v1/events.json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7"

$.ajax({ url: queryURL, method: 'GET' }).done(function(response) {


    console.log(response);
    console.log(response._embedded);
    console.log(response._embedded.events);
    for (var i=0; i < 10; i++) {

        var listDiv = $('<div>');
        var item = $('<p>');
        item.attr('src', response._embedded.events.response[i]);

        //Add rating
        // var rating = response.data[i].rating;
        // var putRatingHere = $('<p>').text("This giphy's rating: " + rating);
        // giphyDiv.append(image);
        // giphyDiv.prepend(putRatingHere);
        // $('#animalsView').append(giphyDiv);
  }


})
