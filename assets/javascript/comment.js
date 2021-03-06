      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDVtLkMFEnRz-n-1adqa4UN34CoUy7oTYE",
    authDomain: "gtcbc7and2.firebaseapp.com",
    databaseURL: "https://gtcbc7and2.firebaseio.com",
    projectId: "gtcbc7and2",
    storageBucket: "gtcbc7and2.appspot.com",
    messagingSenderId: "759565880970"
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
        var daName = ss.name;

        var allSpan = $("<div class='comBox'><span><strong>Name: </strong><p>"+daName+"</p></span>" + "<span><strong>Topic: </strong><p>"+daTopic+"</p></span>" + "<span><strong>Comment: </strong><p>"+daComment+"</p></span></div>");

        $("#message_area").append(allSpan);
    });

