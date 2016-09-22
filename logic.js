// var queryTerm = "";
// var numRecords = 0;

// var eventCounter = 0;


    $(document).ready(function() {
        // var token = "JYDJ72HUJUICRHCZHK";
        var token = "QLHOEK56CPJPK5QOKFWG";
        var events = $("#events");

        $.get('https://www.eventbriteapi.com/v3/events/search/?token='+token+'&expand=venue', function(res) {
            if(res.events.length) {
                var s = "<ul class='eventList'>";
                for(var i=0;i<res.events.length;i++) {
                    var event = res.events[i];
                    console.dir(event);
                    s += "<li><a href='" + event.url + "'>" + event.name.text + "</a> - " + event.description.text + "</li>";
                }
                s += "</ul>";
                $events.html(s);
            } else {
                $events.html("<p>Sorry, there are no upcoming events.</p>");
            }
        });
    });

// $("#searchBtn").on('click', function() {
//     // add search term
//     var queryTerm = $("#search").val().trim();
//     // the new URL includes the search term
//     var newURL = queryURLBase + "&q=" + queryTerm;
//     // add the number of records to retrieve
//     var numRecords = $("#numRecords").val();

//     // runQuery(numRecords, newURL);

//     return false;
// });
//     // AJAX FUnction
//     $.ajax({ url: newURL, type: 'GET', })
//         .done(function(eventBrite) {

//             $("#listEvents").append("<h5>Section: " + eventBrite.response. + "</h5>"); //section
//                 });
        


