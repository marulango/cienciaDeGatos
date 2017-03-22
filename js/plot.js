var barWidth = 30

function totalPopBars() {
    for (var i = 0; i < nombreEstado.length; i++) {
        var xPosition = (barWidth * i + 10)
        fill(0)
        rect(xPosition, 700, 20, -poblacionTotal[i])
    }    
}

function setup() {
    createCanvas(1200, 800)
}

function draw() {
    totalPopBars()
    noLoop()
}

draw()