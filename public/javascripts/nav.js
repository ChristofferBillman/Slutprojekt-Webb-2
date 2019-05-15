var canvas = document.getElementById("canvas")
var ctx = canvas.getContext("2d")

var bubbles = new Image()
var bubble = new Image()
var colorbubble = new Image()
var c = new Image()

bubbles.src = "./assets/logotype/bubbles.svg"
c.src = "./assets/logotype/circle.svg"
bubble.src = "./assets/logotype/bubble.svg"
colorbubble.src = "./assets/logotype/colorbubble.svg"


var animate;

document.getElementById("canvas").addEventListener("mouseover", e => {
    animate = true
})
document.getElementById("canvas").addEventListener("mouseout", e => {
    animate = false;
})

var increment = 0
var momentum = 0
var dmomentum = 0.1
var offset;

setInterval(() => {
    if (animate) momentum += dmomentum
    else momentum -= dmomentum

    if (momentum > 5) momentum = 5
    if (momentum < 0) momentum = 0

    ctx.fillStyle = "white"
    ctx.fillRect(0,0,200,200)

    //ctx.drawImage(bubbles, 5, 35, bubbles.width * 0.8, bubbles.height * 0.8);

    ctx.drawImage(bubble, 35, 80 + offset, bubble.width * 0.5, bubble.height * 0.5)
    for (var i = 0; i < 3; i++) {
        offset = Math.sin((increment + i * 10) / 10) * momentum
        ctx.drawImage(c, 59 + (i * 25), 112 + offset, c.width * 0.1, c.height * 0.1)
    }
    ctx.drawImage(colorbubble, 5, 25 + Math.cosh(offset) / 15, colorbubble.width * 0.5 , colorbubble.height * 0.5)
    increment++
}
, 16)