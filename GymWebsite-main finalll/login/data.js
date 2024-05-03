

const firebaseConfig = {
    apiKey: "AIzaSyAGEA9T68tWhGyuvCjzJMQR3mxB4MWw0F8",
    authDomain: "sign-up-page-ec52c.firebaseapp.com",
    databaseURL: "https://sign-up-page-ec52c-default-rtdb.firebaseio.com",
    projectId: "sign-up-page-ec52c",
    storageBucket: "sign-up-page-ec52c.appspot.com",
    messagingSenderId: "201655285787",
    appId: "1:201655285787:web:db32e164284634b22aa0be",
    measurementId: "G-J98HG3MW61"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

// Firebase Auth
const auth = firebase.auth();

// Firebase Realtime Database
const database = firebase.database();

// let's code 
var datab = database.ref('data');

// let's code 
var datab  = firebase.database().ref('data');

function UserRegister(){
    var email = document.getElementById('eemai').value;
    var password = document.getElementById('password').value;
    console.log("Email:", email);
    console.log("Password:", password);
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
        console.log("User registered successfully");
    }).catch(function (error){
        var errorCode = error.code;
        var errorMessage = error.message;
        console.error("Error registering user:", errorMessage);
    });

}
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("https://www.google.com","_self");
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    var email = document.getElementById('eemai').value;
    Email.send({
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "abhayhingrajiya18@gmail.com",
        Password: "6A26DD6FFFD80DAE8311945FBD911AA3F0FE",
        To: email,
        From: "abhayhingrajiya18@gmail.com",
        Subject: "For Subscription",
        Body: "New Subscription is arrived, His Email address is "+email
    });
    window.location.href = "http://127.0.0.1:5502/index.html";

    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}

function signInWithPopup(){
    auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((result) => {
            // Handle successful sign-in
            var user = result.user;
            console.log('Successfully signed in with Google:', user);
            // Redirect or do something else after successful sign-in
        })
        .catch((error) => {
            // Handle errors
            console.error('Error signing in with Google:', error);
        });
}

function signOut(){
    auth.signOut();
}