
    console.log("loaded");
    // function initMap() {
    //     var userPosition = {lat: 36.11202600, lng: -115.17693800}
    //     console.log(userPosition)

    //     var map = new google.maps.Map(document.getElementById('map'), {
    //       zoom: 16,
    //       center: userPosition
    //     });
    // }
    // initMap();

var eventLocation;
$('.searchBtn').on('click', function(e){
    e.preventDefault()
    $('#eventList').empty();
    eventLocation = $("#search").val();

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation

    $.ajax({ url: queryURL, dataType: 'jsonp', method: 'GET' }).done(function(response) {


        console.log(response);
        console.log(response._embedded.events)

        var events = response._embedded.events;
        $.each(events.slice(0, 10), function(index, value) {
            console.log(value.name);
            var eventDiv = $('<div class="item">')
            var eventName = value.name;
            var p = $('<p>').text( "Name of Event: " + eventName);
            var location = value._embedded.venues[0].location;
            var lat = location.latitude;
            var long = location.longitude;
            console.log(lat +" "+long);
             initMap(lat, long);
            var eventImage = $('<img>');
            $('img').addClass('posterImages');
            var eventPoster = value.images;
            $.each(eventPoster.slice(0, 1), function(index, source) {
                var poster = source.url;
                eventImage.attr('src', poster);
                eventDiv.append(p);
                eventDiv.append(eventImage)



                console.log(value.images)


                $("#eventList").prepend(eventDiv);

            })
        })
    })
})
