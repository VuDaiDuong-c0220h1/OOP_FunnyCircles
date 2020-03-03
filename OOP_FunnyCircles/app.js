function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let radius = Math.floor(Math.random()*100);
    let x = Math.random()*2000;
    let y = Math.random()*2000;
    let color = getRandomColor();
    let circle = new Circle(x, y, radius);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fill();
}

function createMultiCircle() {
    for (i = 1; i < 30; i++) {
        createCircle();
    }
}

createMultiCircle();