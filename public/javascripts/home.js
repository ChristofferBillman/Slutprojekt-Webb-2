var ip = "localhost:4000"
var socket = io.connect(ip)

var chatsopen;

socket.on('newMsg', msg => {
    
})

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
})


var dspflex = chatrecived = chatsent = document.createElement("div")
var p = document.createElement("p")

dspflex.className = "dsp-flex"
chatrecived.className = "chatrecived"
chatsent.className = "chatsent"

function openChat(username) {
    socket.emit('getChats', {recipient: username, user: username})
    document.getElementsByName("body")[0].innerHTML += `
    
    <div class="standard-padding" id="${chatsopen++}">
        <div class="dsp-flex profile-container" id="profile">
            <div class="profile-picture">
                <img src="${username.src}" height="40">
            </div>
        <div>
            <p> ${username.displayname} </p>
            <div class="dsp-flex">
            ${condition ? "boi" : "okay"}
                if online
                    <div>
                        <div class="circle-sm green"></div>
                    </div>
                else
                    <div>
                            <div class="circle-sm gray"></div>
                        <div class="small-separator"></div>
                    </div>
                if online
                    <p> Aktiv </p>
                else
                    <p> Inaktiv</p>
            </div>
        </div>
    </div>
</div>`

}

socket.on('getChats', chats => {
    document.getElementsByClassName('card')[2].innerHTML += `<p>${chats}</p>`
})

function closeChat() {

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
