var ip = "90.231.78.251:4000"
var socket = io.connect(ip)

// Register user.
document.getElementById("registerbtn").addEventListener("click", e => {
    
    var newUser = {
      username: document.getElementById("newUsername").value,
      password: document.getElementById("newPassword").value
    }

    socket.emit("newUser", newUser)
    })