var ip = "localhost:4000" //"90.231.78.251:4000"
var socket = io.connect(ip)

// Register user.
document.getElementById("registerbtn").addEventListener("click", e => {
    
    var newUser = {
      username: document.getElementById("newUsername").value,
      password: document.getElementById("newPassword").value
    }
    socket.emit('md5', newUser.password)
    socket.on('md5', data => {
        token.substr(0, token.lastIndexOf("_"))
        token.substr(token.lastIndexOf("_") + 1)
        document.cookie = token
    })
    document.cookie = JSON.stringify(token)

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
        window.location.href = link
    })

 socket.on('err', error => {
    alert(error)
 })
