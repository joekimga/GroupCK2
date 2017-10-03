$(document).ready(function(){

// displayeBayInfo function re-renders the HTML to display the appropriate content

/*
function displayeBayInfo() {

  var eBay = $(this).attr("data-name");
  var queryURL = "https://www.ebay.com/"
*/

  $("button").on("click", function(event) {
    event.preventDefault();
    terms = $("#searchTerms").val().trim();
      var addition = "_costume"
      var eBayURL = "https://www.ebay.com/" + terms + addition + "";
        console.log(eBayURL);
      $.ajax({
        url: eBayURL
      }).done(function(response){
          console.log(response);
          for (var i = 0; i < 4; i++){
            var 

          }



      })

  })







  };
};


