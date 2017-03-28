//percentPets = total de hogares con mascota (%)
//percentCats = total de hogares con gato
function percentGrid() {
    fill(130)
    // y axis grid marks
    for (var i = 0; i < 11; i++) {
        var yLabelLength = 50
        noStroke()
        stroke(210)
        line(720, yLabelLength * i + 200 , 115, yLabelLength * i + 200)
    }
    //x axis grid marks
    for (var i = 0; i < 11; i++ ){
        var xLabelValues = [i] * 10
        xLabelValues.toString()
        fill(160)
        noStroke()
        textSize(10)
        text(xLabelValues, 90, -50 * i + 700)
        stroke(190)
        line( 60 * i + 120, 200, 60 * i + 120, 700)
    }
}

function percentBars() {
    noStroke()
    var yLabelLength = 20 
    fill(brand[1])
    rect(160, 700, 200, -percentPets * 5)
    fill(brand[2])
    rect(380, 700, 200, -percentCats * 5 )
    fill(255)
    rect(150, 385, 50, 20)   
    rect(375, 593, 50, 15)    
    fill(160)
    text(percentPets + ' %', 160, 400)
    text(percentCats + ' %', 380, 605)

}

function percentLegend() {
    stroke(190)
    fill(255)
    rect(510, 210, 200, 80)
    fill(brand[1])
    noStroke()
    rect(530, 230, 10, 10)
    fill(brand[2])
    rect(530, 260, 10, 10)
    fill(160)
    text('Hogares con mascota', 560, 239)
    text('Hogares con gato', 560, 270)    
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Hogares con mascota vs. Hogares con gato (2012)', 415, 160)
    textSize(12)
    textStyle(NORMAL)
    text('Hogares con Gato', 475, 730)
    text('Hogares con Mascota', 255, 730)
    rotate(1.5707963268)
    text('Porcentaje', 450, -50)
}