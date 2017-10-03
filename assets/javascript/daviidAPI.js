<<<<<<< HEAD
<<<<<<< HEAD
var textVal = "dog";
var textCos = "costume";
var queryURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1741cd0b819eb951e3c55395923708fa&format=json&nojsoncallback=1&text=" + textVal + " " + textCos +"&extras=url_o";

$.ajax({
      url: queryURL,
      
}).done(function(response){
    console.log(response);
    for (var i = 0 ; i < 10 ; i++){
        var pps = response.photos.photo[i];
        var imgLink = "https://farm" + myfarm + ".staticflickr.com/" + myserver + "/" + myid +"_" + mysecret + ".jpg";

        var myfarm = pps.farm;
        var myserver = pps.server;
        var myid = pps.id;
        var mysecret = pps.secret;
        var newDiv = $("<img>");
        newDiv.addClass("size");
        newDiv.attr("src", imgLink);
        $("#flickr").append(newDiv);
    }
    
    
});
=======
================================HTML USE====================================
=======
/*================================HTML USE====================================*/
>>>>>>> 1cd4f55ab1323b04ebaf6d1892f498000a2254f9
    /*<form id="api_form">
        <input id="searchTerms" size="32">
        <button>Search!</button>
    </form>
    <div id="etsy_area"></div>
    <div id="flickr_area"></div>
*/
/*==============================FlickrAPI Begin==================================*/
$(document).ready(function(){
    
    $('#searchbarbtn').on('click', function(event) {
        event.preventDefault();
        terms = $('#searchbar').val().trim();
        var addition = "_costume"
        var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1741cd0b819eb951e3c55395923708fa&format=json&nojsoncallback=1&text=" + terms + addition +"&extras=url_o";
            console.log(flickrURL);
        $.ajax({
            url: flickrURL
        }).done(function(response){
            console.log(response);
            for (var i = 0 ; i < 4 ; i++){
                var pps = response.photos.photo[i];
                var myfarm = pps.farm;
                var myserver = pps.server;
                var myid = pps.id;
                var mysecret = pps.secret;


                var imgLink = "https://farm" + myfarm + ".staticflickr.com/" + myserver + "/" + myid +"_" + mysecret + ".jpg";

                var newImg = $("<img>");
                newImg.addClass("imgClass");
                newImg.attr("src", imgLink);
                newImg.appendTo("#flickr_area");
                    }
                });
    });
});
/*=============================FlickrAPI END=====================================*/
    
/*==============================ETSYAPI Begin====================================*/
 $(document).ready(function(){
        $('#searchbarbtn').on('click', function(event) {
            event.preventDefault();
            api_key = "1zff6gxtmn59gbbrqetiouo0";
            terms = $('#searchbar').val().trim();
            var addition = " costume"
            var etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms+ addition + "&limit=4&includes=Images:1&api_key="+api_key;

            $('#etsy_area').empty();
            $('<p></p>').text('Searching for '+terms).appendTo('#etsy_area');

            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',
                success: function(data) {
                    console.log(data);
                    if (data.ok) {
                        $('#etsy_area').empty();
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                /*<a href="item.url"><img src="item.Images[i]" class="ImgClass"></a>*/
                                var newImg = $("<img>");
                                newImg.addClass("imgClass");
                                newImg.attr("src", item.Images[0].url_570xN);
                                /*newImg.wrap("<a href='" + item.url + "'></a>");*/
                                newImg.appendTo("#etsy_area").wrap("<a href='" + item.url + "'></a>");
                                });
                        } else {
                            $('<p>No results.</p>').appendTo('#etsy_area');
                        }
                    } else {
                        $('#etsy_area').empty();
                        alert(data.error);
                    }
                } 
            });

            return false;
        })
    });

/*==============================ETSYAPI END======================================*/
>>>>>>> 79a9a672742b3bb3f010e9505253ec490d3aa9e6
