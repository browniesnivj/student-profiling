// PROTECT DASHBOARD
if (window.location.pathname.includes("index.html")) {

if (localStorage.getItem("loggedIn") !== "true") {
window.location.href = "login.html";
}

}
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', year: 'numeric', month: 'long', 
        day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' 
    };
    document.getElementById("datetime").innerText = now.toLocaleDateString('en-US', options);
}

// Call it once immediately
updateDateTime();

// Update every second
setInterval(updateDateTime, 1000);

// LOGIN
function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let error = document.getElementById("error");

if(username === "admin" && password === "1234"){

localStorage.setItem("loggedIn","true");
window.location.href="index.html";

}else{

error.innerText="Invalid username or password";

}

}


// LOGOUT
function logout(){

localStorage.removeItem("loggedIn");
window.location.href="login.html";

}


// TAB SWITCH
function showPage(page){

let pages = document.querySelectorAll(".page");

pages.forEach(function(p){
p.style.display="none";
});

document.getElementById(page).style.display="block";

}