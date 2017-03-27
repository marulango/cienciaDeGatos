function barGrid() {
    translate(60, 30)
    for (var i = 0; i < poblacionTotal.length; i++) {
        if(i % 3 === 2){
            yLabel.push(poblacionTotal[i])
            var topLabelValue = Math.max(yLabel)
        }
    }

    for (var i = 0; i < 11; i++){
        var yLabelIncrease = 51
        var yLabelAdd = yLabelIncrease * i
        yLabelValue.push(yLabelAdd)
        yLabelValue.sort(function(a, b){return b-a})
    }

    for (var i = 0; i < yLabelValue.length; i++) {
        var labelHeight = 51 * i + 50
        fill(130)
        textAlign(RIGHT)
        textSize(10)
        text(yLabelValue[i], 10, labelHeight + 4)
        stroke(220)
        line(20, labelHeight, 1200, labelHeight)        
    }
}

function totalPopBars() {
    translate(100,0)
    for (var i = 0; i < nombreEstado.length; i++) {
        stroke(brand[1])
        var xPosition = (barWidth * i )
        fill(brand[3])
        rect(xPosition, 560, 20, -poblacionTotal[i])
    }
}

function totalPetsBars() {
for (var i = 0; i < statePets.length; i++) {
        stroke(brand[1])
        var xPosition = ( barWidth * i )
        fill(brand[1])
        rect(xPosition, 560, 20, -statePets[i])
    }
}

function legend() {
    fill(255)
    stroke(210)
    rect(780, 0, 250, 80)
    noStroke()
    textSize(10)
    textAlign(LEFT)
    fill(brand[3])
    rect(800, 50, 10, 10)
    fill(brand[1])
    rect(800, 20, 10, 10)
    fill(130)
    text('Hogares con gasto en mascotas', 820, 60)
    text('Total de Hogares', 820, 30)
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(20)
    text('Gasto en mascotas por hogar (ENGASTO 2012)', 500, 0)
    textStyle(NORMAL)
    textSize(16)
    textAlign(CENTER)
    text('Estado', 480, 680)
    rotate(1.5707963268)
    text('Muestra de población', 320, 140)
}


function stateLabels() {
    translate(0,0)
    fill(130)
    translate(0, -5)
    textSize(10)
    textAlign(LEFT)
    textStyle(NORMAL)
    noStroke()
    for (var i = 0; i < nombreEstado.length; i++) {
        text(nombreEstado[i], 580, (-30 * [i]))
    }
}

