// Dark mode

var cards = document.getElementsByClassName('card')
var p = document.getElementsByTagName('p')
var input = document.getElementsByTagName('input')
var sliders = document.getElementsByClassName('slider')
var a = document.getElementsByTagName('a')

if(JSON.parse(localStorage.getItem("darkmode"))) document.getElementById("darkmodeSwitch").checked = true

document.getElementById("darkmodeSwitch").addEventListener("click", function() {
    toggle()
})

function toggle() {
    if (document.getElementById("darkmodeSwitch").checked) {
        console.log('tja')
        localStorage.setItem('darkmode', true)
    } else {
        console.log('else')
        localStorage.setItem('darkmode', false) 
    }

    if (JSON.parse(localStorage.getItem("darkmode"))) {
        document.getElementById('body').style.backgroundColor = "#252627"
        document.getElementsByTagName('nav')[0].style.backgroundColor = "#37393a"
        for(var i = 0; i < cards.length; i++) cards[i].style.backgroundColor = "#37393a"
        for(var i = 0; i < p.length; i++) p[i].style.color = "whitesmoke"
        for(var i = 0; i < input.length; i++) input[i].style.backgroundColor = "#252627"
        for(var i = 0; i < input.length; i++) input[i].style.color = "whitesmoke"
        for(var i = 0; i < a.length; i++) a[i].style.color = "whitesmoke"
        //for(var i = 0; i < sliders.length; i++) sliders[i].style.backgroundColor = "#252627"
        console.log('mörk')
    } else {
        console.log('vit')
        document.getElementById('body').style.backgroundColor = "white"
        document.getElementsByTagName('nav')[0].style.backgroundColor = "white"
        for(var i = 0; i < cards.length; i++) cards[i].style.backgroundColor = "white"
        for(var i = 0; i < p.length; i++) p[i].style.color = "black"
        for(var i = 0; i < input.length; i++) input[i].style.backgroundColor = "white"
        for(var i = 0; i < input.length; i++) input[i].style.color = "black"
        for(var i = 0; i < a.length; i++) a[i].style.color = "black"
        //for(var i = 0; i < sliders.length; i++) sliders[i].style.backgroundColor = "#252627"
    }
}

// Settings

