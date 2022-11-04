const firebaseConfig = {
      apiKey: "AIzaSyAKBUpyzdnZ6FFP8uCCsLljmwSXmnguxxg",
      authDomain: "my-independent-app-79e76.firebaseapp.com",
      databaseURL: "https://my-independent-app-79e76-default-rtdb.firebaseio.com",
      projectId: "my-independent-app-79e76",
      storageBucket: "my-independent-app-79e76.appspot.com",
      messagingSenderId: "346728079074",
      appId: "1:346728079074:web:7a582bb9586879b84f88bb"
    };

  firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";
  
  function addRecycleRoom()
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "Adding Room Name"
        });
        
        localStorage.setItem("room_name", room_name);
        document.getElementById("room_name").value = " ";
        window.location = "chatroom.html"; 
  }
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room Name : " + Room_names);
        
        row = "<div class= 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div> <hr>";
        document.getElementById("output").innerHTML += row;
  
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
        console.log(name);
        localStorage.setItem("room_name", name);

        user_name = "Your Assistant";
        window.location = "chatroom.html";
  }
  function back()
  {
        localStorage.removeItem("room_name");
        localStorage.removeItem("user_name");
        window.location = "index.html";
  }