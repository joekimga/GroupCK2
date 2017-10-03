  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAocQPo9USuep7O-bUd9w_uXS02kfelQbk",
    authDomain: "ga-buddiha-summer-camp.firebaseapp.com",
    databaseURL: "https://ga-buddiha-summer-camp.firebaseio.com",
    projectId: "ga-buddiha-summer-camp",
    storageBucket: "ga-buddiha-summer-camp.appspot.com",
    messagingSenderId: "1051790621452"
  };
  firebase.initializeApp(config);
  var database = firebase.database();
    
    var userName="";
    var userSubject= "";
    var userCom="";
    var userNewCom="";

    
$('#submit').on("click", function(event){
    event.preventDefault();
    userName = $("#name").val().trim();
    userSubject = $("#Subject").val().trim();
    userCom = $("#com").val().trim();

database.ref().push({
    topic: userSubject,
    name: userName,
    comment: userCom,
    newComments: userNewCom
    });
    $("#name").val('');
    $("#Subject").val('');
    $("#com").val('');
   }); 
    database.ref().on("child_added", function(snapshot){
        var ss = snapshot.val();
        var daTopic = ss.topic;
        var daComment = ss.comment;
        var daNewComment = ss.newComments;

        var mySpanO = $("<span>Topic: <p>"+daTopic+"</p></span>");
        var mySpanT = $("<span>Comment: <p>"+daComment+"</p></span>");
        var mySpanF = $("<span><p>"+daNewComment+"</p></span><br><hr>");
        

        $("#message_area").append(mySpanO);
        $("#message_area").append(mySpanT);
        $("#message_area").append(mySpanF);

    });
