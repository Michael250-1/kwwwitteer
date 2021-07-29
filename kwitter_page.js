//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBAbDrGcCQUhG3MprKsbKPj2Bv7qGr1DjE",
    authDomain: "kwitter-10892.firebaseapp.com",
    databaseURL: "https://kwitter-10892-default-rtdb.firebaseio.com",
    projectId: "kwitter-10892",
    storageBucket: "kwitter-10892.appspot.com",
    messagingSenderId: "1016903183163",
    appId: "1:1016903183163:web:4eed149e48b9b0c52c651e"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("username");
  room_name=localStorage.getItem("roomname");
  console.log(user_name);
  console.log(room_name);

  function send(){
    msg=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("message").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;

//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];

namewithtag="<h4> "+name+"<img class='user_tick' src='tick.png'> </h4>";
messagewithtag="<h4 class='message_h4'>" + message + "</h4>";
likebutton="<button class='btn btn-warning' id=" + firebase_message_id +" value=" + like + " onclick='updatelike(this.id)'>";
spanwithtag="<span class='glyphicon glyphicon-thumbs-up'>Like=" +like+"</span> </button> <hr>";
row= namewithtag + messagewithtag + likebutton + spanwithtag;
document.getElementById("output").innerHTML +=row;
console.log(firebase_message_id);
//End code
   } });  }); }
getData();



function updatelike(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update( {
          like:updated_likes
    });
}

function logout(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location="index.html";
}