//ADD YOUR FIREBASE LINKS HERE
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
  
  username=localStorage.getItem("username");
document.getElementById("username").innerHTML="Welcome " + username + "!";

function addroom(){
    roomname=document.getElementById("roomname").value;
    firebase.database().ref("/").child(roomname).update({
          purpose:"adding room name"
    });
    localStorage.setItem("roomname", roomname);
    window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
   console.log("room name= " + Room_names);
   row= "<div class='roomname' id="+Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div> <hr>";
   document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirecttoroomname(name){
    console.log(name);
    localStorage.setItem("roomname", name);
    window.location="kwitter_page.html";
}
function logout(){
    localStorage.removeItem("roomname");
    localStorage.removeItem("username");
    window.location="index.html";
}