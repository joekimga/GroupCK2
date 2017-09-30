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