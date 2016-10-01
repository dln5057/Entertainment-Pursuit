console.log("loaded");
// to check if ticketmaster.js is loaded by the HTML
//
//creates an on lick function for the button search
$('.searchBtn').on('click', function(e){
    e.preventDefault()
    $('#eventList').empty();
    eventLocation = $("#search").val();

    //create a variable queryURL to use as the ajax key
    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation
    //ajax get call for Json
    $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {

        console.log(response);
        console.log(response._embedded.events);
        // create variable for events in called object
        var events = response._embedded.events;
        //loop that goes through the first 20 objects and sperates them into indivisual objects
        $.each(events.slice(0, 20), function(index, value) {
            console.log(value.name);
            // dynamically create a grid for each event
            var eventDiv = $('<div class="item grid-item col-md-3 col-lg-6 col-xs-3">') 
            // creats a variable called eventName to use dot notation to extract the name of event in object
            var eventName = value.name;
            //dynamically creates a header for the name of the event.
            var p = $('<h4>').text( "Name of Event: " + eventName);
            //variable created to dynamically create a favorite button.
            var favoriteBtn = $('<button type="button" class="btn btn-default btn-lg"> <span class="glyphicon glyphicon-star" id="favoriteBtn" aria-hidden="true"></span> Favorite </button>')
            //variable to extract the location of the venue 
            var location = value._embedded.venues[0].location;
            // variable latitude and longitude to extract the positions needed for google places.
            var latitude = location.latitude;
            var longitude = location.longitude;
            console.log(latitude +" "+longitude);
            //variable to dynamically create an image 
            var eventImage = $('<img>');
            //when image is dynamically made, give it a classname 
            $('img').addClass('posterImages full-w');
            //varible created to use dot notation to extract the image poster of event.
            var eventPoster = value.images;
            //array of images is looped and takes only the first image in array.
            $.each(eventPoster.slice(0, 1), function(index, source) {
                //varible for the event poster image
                var poster = source.url;
                //give the dynamically created img a attribute of the image found in value.images
                eventImage.attr('src', poster);
                //take the eventDiv that is dynamically created for each event object and append p to it
                eventDiv.append(p);
                //append eventImage to the eventDiv
                eventDiv.append(eventImage)
                //append favoirteBtn to the eventDiv
                eventDiv.append(favoriteBtn)
                //prepend eventDiv to the div in HTML that has an id named eventList
                $("#eventList").prepend(eventDiv);
            })
        })
        //function that uses masonry to display images in a pintrest type style
        $grid.imagesLoaded().progress( function() {
            $grid.masonry( 'reloadItems' );
            $grid.masonry( 'layout' );
        });
    })
})
