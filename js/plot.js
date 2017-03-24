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

function percentBar() {
    // Primero, deberías ponerle grid c:
}

function grid() {
    
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

function legend() {
    noStroke()
    fill(brand[3])
    rect(900, 40, 10, 10)
    fill(brand[1])
    rect(900, 10, 10, 10)
    fill(130)
    text('Hogares con gasto en mascotas', 920, 50)
    text('Total de Hogares', 920, 20)
}

function setup() {
    createCanvas(1200, 800)
}

function draw() {
    totalPopBars()
    totalPetsBars()
    legend()
    stateLabels() //Al final porque translate :v
    noLoop()
}

draw()