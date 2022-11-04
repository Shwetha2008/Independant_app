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
    room_name = localStorage.getItem("room_name");
    
    admin_name_with_tag = "<h4>Admin<img src = 'tick.png' class = 'admin_tick'> </h4>";
    admin_message_with_tag = "<h4 class = 'message_h4' style= 'color : white;'> Hello there... How can we help you?</h4>";

    output = admin_name_with_tag + admin_message_with_tag;
    document.getElementById("admin1").innerHTML += output;
    
    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name : user_name,
                message : msg,
          });   
          document.getElementById("msg").value = " ";
    }
    
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;

    console.log(firebase_message_id);
    console.log(message_data);
    
    name = message_data['name'];
    message = message_data['message'];
    
    name_with_tag = "<h4>" + name + "<img src = 'tick.png' class = 'user_tick'> </h4>";
    message_with_tag = "<h4 class = 'message_h4' style= 'color : white;'>" + message + "</h4>";

    row = name_with_tag + message_with_tag;    
    document.getElementById("output").innerHTML += row;
    
          } });  }); }
    getData();
    
    function back()
    {
          localStorage.removeItem("room_name");
          localStorage.removeItem("user_name");
          window.location = "recycle.html";
    }
    function next()
    {
      window.location = "thank_you.html";
    }
    