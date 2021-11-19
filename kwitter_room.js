// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW_y1WdOYUd3nB7KL6E-TjFvNUfB7Cono",
  authDomain: "kwitter-webapp-2.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-2-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-2",
  storageBucket: "kwitter-webapp-2.appspot.com",
  messagingSenderId: "1088980831637",
  appId: "1:1088980831637:web:38d2f808c72d5f93d13a9c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME " + userName + " !";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room Name", room_name);
  firebase.database().ref("/").child(room_name).update({
        purpose: "Sample"
  });
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              room_names = childKey;
              row = "<div class = 'room_name' id = " + room_names + " onclick = 'redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
        });

  });

}

getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}