// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARLajixBqkC_ncYJV3fvln7ijGDePXTP8",
  authDomain: "kwitter-webapp-2-a4618.firebaseapp.com",
  databaseURL: "https://kwitter-webapp-2-a4618-default-rtdb.firebaseio.com",
  projectId: "kwitter-webapp-2-a4618",
  storageBucket: "kwitter-webapp-2-a4618.appspot.com",
  messagingSenderId: "901417810524",
  appId: "1:901417810524:web:8deaadec65ff73e1db8499",
  measurementId: "G-XEWE2NL4RF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var userName = localStorage.getItem("user_name");
document.getElementById("user_name1").innerHTML = "WELCOME " + userName + " !";

function addRoom() {
  room_name = document.getElementById("room_name").value;
  localStorage.setItem("Room Name", room_name);
  firebase.database().ref("/").child(room_name).update({
    purpose: "Hi"
  });
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              room_names = childKey;
              row = "<div class = 'room_name' id = '" + room_names + "' onclick = 'redirectToRoomName(this.id)'>#" + room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
        });

  });

}

getData();

function redirectToRoomName(name) {
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}