//percentPets = total de hogares con mascota (%)
//percentCats = total de hogares con gato
percentBar.sort(function(a, b){return b[1]-a[1]})
function percentGrid() {
    fill(130)
    // y axis grid marks
    for (var i = 0; i < percentBar.length; i++) {
        var yLabelLength = 30
        noStroke()
        stroke(210)
        line(1000, yLabelLength * i , 10, yLabelLength * i)
    }
    //x axis grid marks
    for (var i = 0; i < 11; i++ ){
        var xLabelValues = [i] * 10
        xLabelValues.toString()
        fill(160)
        noStroke()
        text(xLabelValues, 0, 10 * i)
        stroke(190)
        line( 100*i, 930, 100*i, 0)
    }
}

function percentBars() {
    var yLabelLength = 20 
    fill(brand[1])
    rect(160, 930, 20, -percentPets * 10 )
    fill(brand[2])
    rect(200, 930, 20, -percentCats * 10 ) 
}

function percentLegend() {
    textSize(16)
    textAlign(CENTER)
    text('Estado', 0, 0)
    text('Porcentaje', 0, 0)
}

function compareCatPersons() {
    // aqui comparas la cantidad de crazy cat ladies vs dudes en ¿otra gráfica?
}