var ip = "localhost:4000"
var socket = io.connect(ip)

// Register user.
document.getElementById("registerbtn").addEventListener("click", e => {
    
    var newUser = {
      username: document.getElementById("newUsername").value,
      password: document.getElementById("newPassword").value
    }
    socket.emit('token', newUser)
    socket.on('token', token => {
        setCookie('token', token, 30)
    })

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

    // TODO: Automatically log in user if valid token already exists in cookies.
    socket.emit('token', credentials)
    socket.on('token', token => {
        setCookie('token', token, 30)
    })

    socket.emit('login', credentials)
 })
    socket.on('redirect', link => {
        window.location.href = link
    })

 socket.on('err', error => {
    alert(error)
 })

// Cookie parser
function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
