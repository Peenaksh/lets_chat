

const firebaseConfig = {
      apiKey: "AIzaSyDX3mmJ7deUJqlVLbwD5hWd8A5WajrNYA0",
      authDomain: "chat-8e63a.firebaseapp.com",
      databaseURL: "https://chat-8e63a-default-rtdb.firebaseio.com",
      projectId: "chat-8e63a",
      storageBucket: "chat-8e63a.appspot.com",
      messagingSenderId: "724844120120",
      appId: "1:724844120120:web:d1726b2de55eedb7af3ecd"
    };
    
    
    
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
  room_name = localStorage.getItem("Roomname");
  user_name = localStorage.getItem("Username");

  console.log("room name "+room_name);
  console.log("user name "+user_name);

  function logout() {
        localStorage.removeItem("Roomname");
        localStorage.removeItem("Username");
        window.location.replace("index.html");
  }
  function send() {
        msg = document.getElementById("msg").value;
        console.log("Message "+msg);
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0,
              dislike:0
        });
        document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();
