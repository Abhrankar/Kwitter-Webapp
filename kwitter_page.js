//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCTf3Fp7SNUTt04c_LLn9Wgv9seG3fdTOI",
      authDomain: "kwitter-webapp-8d12a.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-8d12a-default-rtdb.firebaseio.com",
      projectId: "kwitter-webapp-8d12a",
      storageBucket: "kwitter-webapp-8d12a.appspot.com",
      messagingSenderId: "608885599371",
      appId: "1:608885599371:web:384b665eba8cfe5df6f88e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

userName = localStorage.getItem("user_name");
roomName = localStorage.getItem("Room Name");

function getData() {
      firebase.database().ref("/" + room_name).on('value',
            function (snapshot) {
                  document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                              firebase_message_id = childKey;
                              message_data = childData;
                              //Start code

                              //End code
                        }
                  });
            });
}

getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}

function send() {
      msg = document.getElementById("msg").value;
      console.log(msg);
      firebase.database().ref(roomName).push({
            name:userName,
            message:msg,
            like:0,
      });
}