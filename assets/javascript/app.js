<<<<<<< HEAD
// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    $('#search-container').html('<pre>' + str + '</pre>');
  });
}
=======
$(document).ready(function(){

// displayeBayInfo function re-renders the HTML to display the appropriate content
function displayeBayInfo() {

  var eBay = $(this).attr("data-name");
  var queryURL = ""








  };
};
>>>>>>> 79a9a672742b3bb3f010e9505253ec490d3aa9e6
