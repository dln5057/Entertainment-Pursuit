console.log("loaded");

var queryURL = "https://app.ticketmaster.com/discovery/v1/events.json?apikey=cAnARp0Bdf5EhZsX9PCXuiOGzhkmhFM7"

$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

console.log(response);

})