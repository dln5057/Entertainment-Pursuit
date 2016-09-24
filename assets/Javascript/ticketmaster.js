console.log("loaded");
var eventLocation = "Country";
$('button').on('click', function() {

    var queryURL = "https://app.ticketmaster.com/discovery/v2/events.Json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7&keyword=" + eventLocation

    $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {

        console.log(response);
        console.log(response._embedded.events)

        var events = response._embedded.events;
        $.each(events.slice(0, 10), function(index, value) {
            console.log(value.name);

            $("#eventList").append(events.name);
        })
    })
})
