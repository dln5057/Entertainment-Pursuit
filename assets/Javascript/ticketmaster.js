console.log("loaded");

var eventLocation;
$('.searchBtn').on('click', function(e){
    e.preventDefault()
    $('#eventList').empty();
    eventLocation = $("#search").val();

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation

    $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {


        console.log(response);
        console.log(response._embedded.events);
        // console.log(response._embedded.events.);

        var events = response._embedded.events;
        $.each(events.slice(0, 20), function(index, value) {
            console.log(value.name);
            var eventDiv = $('<div class="item grid-item col-md-3 col-lg-6 col-xs-3">')
            var eventName = value.name;
            var p = $('<h4>').text( "Name of Event: " + eventName);
            var favoriteBtn = $('<button type="button" class="btn btn-default btn-lg"> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> Favorite </button>')
            var p = $('<h4>').text( "Event: " + eventName);
            var location = value._embedded.venues[0].location;
            var latitude = location.latitude;
            var longitude = location.longitude;
            console.log(latitude +" "+longitude);
            // createNewMarker(latitude, longitude);
            var eventImage = $('<img>');
            $('img').addClass('posterImages full-w');
            var eventPoster = value.images;

            $.each(eventPoster.slice(0, 1), function(index, source) {
                var poster = source.url;
                eventImage.attr('src', poster);
                eventDiv.append(p);
                eventDiv.append(eventImage)
                eventDiv.append(favoriteBtn)

                console.log(value.images)


                $("#eventList").prepend(eventDiv);

            })
        })
        $grid.imagesLoaded().progress( function() {
            $grid.masonry( 'reloadItems' );
            $grid.masonry( 'layout' );
        });
    })
})
