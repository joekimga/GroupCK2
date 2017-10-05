  
/*==============================FlickrAPI Begin==================================*/
$(document).ready(function(){
    
    $('button').on('click', function(event) {
        event.preventDefault();
        $('#flickr_area').empty();
        terms = $('#searchbar').val().trim();
        var addition = "_costume"

        var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1741cd0b819eb951e3c55395923708fa&format=json&nojsoncallback=1&text=" + terms +  addition +"&extras=url_o";
        $.ajax({
            url: flickrURL
        }).done(function(response){
            for (var i = 0 ; i < 8 ; i++){
                var pps = response.photos.photo[i];
                var myfarm = pps.farm;
                var myserver = pps.server;
                var myid = pps.id;
                var mysecret = pps.secret;


                var imgLink = "https://farm" + myfarm + ".staticflickr.com/" + myserver + "/" + myid +"_" + mysecret + ".jpg";

                var newImg = $("<img>");
                newImg.addClass("imgClass imgStyle");
                newImg.attr("src", imgLink);
                newImg.appendTo("#flickr_area").wrap("<div class='divImgDivClass col-xs-6 col-sm-6 col-md-3 col-lg-3'><div class='imgDivClass col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div>");
            }
        }); 
    });
});

/*=============================FlickrAPI END=====================================*/
    
/*==============================ETSYAPI Begin====================================*/
 $(document).ready(function(){
        $('button').on('click', function(event) {
            event.preventDefault();
            api_key = "1zff6gxtmn59gbbrqetiouo0";
            terms = $('#searchbar').val().trim();
            var addition = " costume"
            var etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                terms + addition + "&limit=8&includes=Images:1&api_key="+api_key;

            $('#etsy_area').empty();
            $('<p></p>').text('Searching for '+terms).appendTo('#etsy_area');

            $.ajax({
                url: etsyURL,
                dataType: 'jsonp',
                success: function(data) {
                    if (data.ok) {
                        $('#etsy_area').empty();
                        if (data.count > 0) {
                            $.each(data.results, function(i,item) {
                                /*<a href="item.url"><img src="item.Images[i]" class="ImgClass"></a>*/
                                var newImg = $("<img>");
                                newImg.addClass("imgClass");
                                newImg.attr("src", item.Images[0].url_570xN);
                                /*newImg.wrap("<a href='" + item.url + "'></a>");*/
                                newImg.appendTo("#etsy_area").wrap("<div class='divImgDivClass col-xs-6 col-sm-6 col-md-3 col-lg-3'><div class='imgDivClass col-xs-12 col-sm-12 col-md-12 col-lg-12'><a href='" + item.url + "'></a></div></div>");
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
/*==============================Img On Click ====================================*/
$(document).ready(function(){
var imgBtnWord;
$(".imgBtn").on('click',function(){
        $('#flickr_area').empty();
        imgBtnWord = $(this).attr("value");
        var addition = "%20costume%20in%20USA"
 
        var flickrURL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=1741cd0b819eb951e3c55395923708fa&format=json&nojsoncallback=1&text=" + imgBtnWord +  addition +"&extras=url_o";
        $.ajax({
            url: flickrURL
        }).done(function(response){
            console.log(response);
            for (var i = 0 ; i < 8 ; i++){
                var pps = response.photos.photo[i];
                var myfarm = pps.farm;
                var myserver = pps.server;
                var myid = pps.id;
                var mysecret = pps.secret;


                var imgLink = "https://farm" + myfarm + ".staticflickr.com/" + myserver + "/" + myid +"_" + mysecret + ".jpg";

                var newImg = $("<img>");
                newImg.addClass("imgClass imgStyle");
                newImg.attr("src", imgLink);
                newImg.appendTo("#flickr_area").wrap("<div class='divImgDivClass col-xs-6 col-sm-6 col-md-3 col-lg-3'><div class='imgDivClass col-xs-12 col-sm-12 col-md-12 col-lg-12'></div></div>");
            }
        }); 
    });
});

 $(document).ready(function(){
        $(".imgBtn").on('click',function(){
            imgBtnWord = $(this).attr("value");

            api_key = "1zff6gxtmn59gbbrqetiouo0";
            terms = $('#searchbar').val().trim();
            var addition = "%20costume%20in%20USA"
            var etsyURL = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                imgBtnWord + addition + "&limit=8&includes=Images:1&api_key="+api_key;

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
                                newImg.appendTo("#etsy_area").wrap("<div class='divImgDivClass col-xs-6 col-sm-6 col-md-3 col-lg-3'><div class='imgDivClass col-xs-12 col-sm-12 col-md-12 col-lg-12'><a href='" + item.url + "'></a></div></div>");
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