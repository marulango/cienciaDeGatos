var barWidth = 30
var sunsetOrange = '#FF883E'
var clearedGreen = '#79DD15'
var brand = ['#EF2B4C','#FF3E5F', '#FF7190', '#FF9CB6', '#FFC7D8']
var guidanceBlue = '#3F91FF'
var main = '#939598'


function totalPopBars() {
    for (var i = 0; i < nombreEstado.length; i++) {
        stroke(brand[1])
        var xPosition = (barWidth * i + 10)
        fill(brand[3])
        rect(xPosition, 600, 20, -poblacionTotal[i])
    }    
}

function totalPetsBars() {
for (var i = 0; i < statePets.length; i++) {
        stroke(brand[1])
        var xPosition = (barWidth * i + 10)
        fill(brand[1])
        rect(xPosition, 600, 20, -statePets[i])
    }
}

function stateLabels() {
    fill(130)
    rotate(1.5707963268) //radianes porque YOLO
    translate(0, -15)
    noStroke()
    for (var i = 0; i < nombreEstado.length; i++) {
        text(nombreEstado[i], 620, (-30 * [i]))
    }
}

function setup() {
    createCanvas(1200, 800)
}

function draw() {
    totalPopBars()
    totalPetsBars()
    stateLabels()
    noLoop()
}

draw()