
var firebaseConfig = {
      apiKey: "AIzaSyDPCUs_UsIzC-YHCjbav4OJCaYS8ejuiMg",
      authDomain: "kwitter-f2aff.firebaseapp.com",
      databaseURL: "https://kwitter-f2aff-default-rtdb.firebaseio.com",
      projectId: "kwitter-f2aff",
      storageBucket: "kwitter-f2aff.appspot.com",
      messagingSenderId: "149064746384",
      appId: "1:149064746384:web:7ddfcf3b3317c036b35f15"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

      var username = localStorage.getItem("username");
      document.getElementById("username").innerHTML ="Welcome "+username+"!"; 


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room_name -"+Room_names);
row ="<div id="+Room_names+" class='room_name' onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function addRoom(){
     var room_name = document.getElementById("add_room").value;

     firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
     });
localStorage.setItem("add_room",room_name);
window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("add_room",name);
      window.location ="Kwitter_page.html";
}
function logout(){
 localStorage.removeItem("add_room",name);
 localStorage.removeItem("usrename",username);
 window.location ="index.html"; 
}