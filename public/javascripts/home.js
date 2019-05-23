var ip = "localhost:4000"
var socket = io.connect(ip)
var token = getCookie('token')
console.log(token)

//Recive message.
socket.on('newMsg', msg => {
    
})

// Search
socket.on('onsearch', users => {
    console.log("searching...")
    if (users.length < 1) {
        document.getElementById("searchresults").innerHTML += `<p class="gray"> Inga resultat. </p>`
    } else {
        for(var i = 0; i < 10; i++) {
            document.getElementById("searchresults").innerHTML +=
            `
            <div class="standard-padding" id="">
                <div class="dsp-flex profile-container" id="profile">
                    <div class="profile-picture">
                        <img src="${users[i].src}" height="40">
                    </div>
                <div>
                <div class="dsp-flex">
                    <p> ${users[i].username} </p> <div class="spacer"></div> <p class="gray"> ${users[i].displayname} </p>
                </div>
                    <div class="dsp-flex">
                        <button class="clickable-text friendrequest" id="${users[i].id}_friendrequest" onclick="friendrequest(this)"> Skicka vänförfrågan </button>
                    </div>
                </div>
            </div>
        </div>
        `
        }
    }  
})
function friendrequest(el) {
    var recipient = el.id.substr(0, el.id.lastIndexOf("_"))
    socket.emit('friendrequest', {recipient: recipient, sender: token})
}
/*document.getElementsByClassName("friendrequest").addEventListener("click", e => {
    if (users[i] == document.getElementById)
})*/


searchbar = document.getElementById("searchbar")

searchbar.addEventListener("keydown", e => {
    if (e) {
        document.getElementById("searchresults").innerHTML = ""
        console.log("sending to server ...")
        searchquery = searchbar.value
        socket.emit('onsearch', searchquery)
    }
})
document.getElementById("searchbar").addEventListener("focus", e => {
    document.getElementById("searchresults").style.display = "inline-block"
})
document.getElementById("searchbar").addEventListener("blur", e => {
    document.getElementById("searchresults").style.display = "none"
})
/*
document.getElementById("send1").addEventListener("click", e => {
    token = getCookie("token")
    username = token.substr(0, token.lastIndexOf("_"))
    msg = {
        message: document.getElementById("send1input").value,
        recipient: 6,
        status: null,
        timesent: null,
        userid: username
    }
    socket.emit('newMsg', msg)
    console.log(msg)
})*/
/*window.onload = () => {
    for(var i = 0; i < users.length; i++ )
    loadlatest(users[i]) 
}*/

var dspflex = chatrecived = chatsent = document.createElement("div")
var p = document.createElement("p")

dspflex.className = "dsp-flex"
chatrecived.className = "chatrecived"
chatsent.className = "chatsent"

function loadlatest(user) {
    socket.emit('getChats', {recipient: user.recipient, user: user.username})
    document.getElementsByClassName("card")[1].innerHTML += `
    
    <div class="standard-padding" id="${chatsopen++}">
        <div class="dsp-flex profile-container" id="profile">
            <div class="profile-picture">
                <img src="${user.src}" height="40">
            </div>
        <div>
            <p> ${user.displayname} </p>
            <div class="dsp-flex">
                ${user.online ? `<div><div class="circle-sm green"></div></div>` : `<div><div class="circle-sm gray"></div><div class="small-separator"></div></div>`}
                ${user.online ? `<p> Aktiv </p>`:`<p> Inaktiv</p>`}
            </div>
        </div>
    </div>
</div>
`
}

socket.on('getChats', chats => {
    
})

function closechat(user) {

}
function openchat(user) {

}
function createsentchat(id, message) {
    document.getElementById(id).innerHTML +=
    `
    <div class="dsp-flex">
        <div class="chatsent">
            <p> ${message} </p>
        </div>
    </div>
    `
}
function createrecivedchat(id, message) {
    document.getElementById(id).innerHTML +=
    `
    <div class="dsp-flex">
        <div class="chatrecived">
            <p> ${message} </p>
        </div>
    </div>
    `
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
