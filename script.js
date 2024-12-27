// User data store
const users = {};
let currentUser = null

// Loging/Register logic
const registerForm = document.getElementById("registerForm");
const loginContainer = document.getElementById("login-container");
const chatContainer = document.getElementById("chat-container");
const logoutButton = document.getElementById("logout");

registerForm.addEventListener("submit",(e) =>  {e.preventDefault()});
const username = document.getElementById("username").value ;
const password = document.getElementById("password").value ;

if (!users[username]) { users[username] = {password, messages: [] }; 
alert("Account created succeffuly!");} else if (uders[username].password == password) {alert("incorrect password!"); return;}

currentUser = username;
logingContainer.classList.add("hidden");
chatContainer.classList.remove("hidden");

// Logout
logoutButton.addEventListener("click",() => {
    currentUser =null;
    chatContainer.classList.add("hidden");
    loginContainer.classList.remove("hidden");
})

// Chat messaging
const messagesDiv = document.getElementById("messages");
const messagesForm = document.getElementById("messagesForm");
const messageInput = document.getElementById("messageInput");

messagesForm.addEventListener("submit", (e) => {e.preventDefault();
    const message = messageInput.value.trim();

    if (!message) return
    
    // content moderation
    if (/porn|kill|Blood/i.test(message)) {
        alert("message contains forbidden content");
        return;
    
    }

    const messageElement = document.createElement("div");
    messageElement.textContent = `${currentUser}: ${message}`;
    messageDiv.appenChild(messageElement);

    messageInput.value = "";
    messageDiv.scrolltop = messageDiv.scrollheight;
});

// Location sharing
const toggleLocationButton = document.getElementById("toggleLocation");
const locationStatus = document.getElementById("locationStatus");

let isLocationActive = false;

toggleLocationButton.addEventListener("click",() => {
    if (!isLocationActive) {
        navigator.geolocation.getCurrentPosition(
            (position) => { 
                const { latitude, longitude } = position. coords;
                locationStatus.textContent = `Location: ${latitude.toFixed(
                    4


                )}, ${longitude.toFixed(4)}`;
                isLocationActive = true;
                toggleLocationButton.textcontent = " Deactivate Live Location";
            },
            (error) => {
                alert("unable to retrieve location.");
            }
        );

    } else { 
        locationStatus.textcontent = "";
        isLocationActive = false;
        toggleLocationButton.textcontent =" Active Live Location";
    }
});
