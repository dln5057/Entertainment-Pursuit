console.log("loaded");
var eventLocation = "Country";
$('button').on('click', function(){
    
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation

    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {

<<<<<<< HEAD
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
=======
    console.log(response);
    console.log(response._embedded.events)

    var events = response._embedded.events;
$.each(events.slice(0,10), function(index, value){ 
    console.log(value.name);

    $("#eventList").append(events.name)
    })
  })
})



  
>>>>>>> 7e8889d25455984befd354edcbcaeab7e5f82271
