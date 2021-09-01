const firebaseConfig = {
    apiKey: "AIzaSyBRA4vjMfVKCGtEEjl9DkZkTxqOdIqw4Mk",
    authDomain: "kwitter-1-3.firebaseapp.com",
    projectId: "kwitter-1-3",
    storageBucket: "kwitter-1-3.appspot.com",
    messagingSenderId: "1078203578170",
    appId: "1:1078203578170:web:418af05a2dfec74aac4203"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    chat = document.getElementById("chat").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: chat,
          like: 0
    });
    document.getElementById("chat").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      //End code
                }
          });
    });
}
getData();