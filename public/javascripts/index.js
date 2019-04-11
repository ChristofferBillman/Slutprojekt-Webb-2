var ip = "localhost:4000" //"90.231.78.251:4000"
var socket = io.connect(ip)

// Register user.
document.getElementById("registerbtn").addEventListener("click", e => {
    
    var newUser = {
      username: document.getElementById("newUsername").value,
      password: document.getElementById("newPassword").value
    }

    socket.emit("newUser", newUser)
    window.location.href="/home"
    })

// Login
 document.getElementById('loginbtn').addEventListener('click', e => {
     console.log('login')
    credentials = {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    }
    socket.emit('login', credentials)
 })
    socket.on('redirect', link => {
    })

 socket.on('err', error => {
    alert(error)
 })
