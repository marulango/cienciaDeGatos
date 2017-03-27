percentBar.sort(function(a, b){return b[1]-a[1]})
function percentGrid() {
    fill(130)
    for (var i = 0; i < percentBar.length; i++) {
        var yLabelLength = 30
        noStroke()
        text(percentBar[i][0], -20, yLabelLength * i + 800)
        stroke(210)
        line(-50, yLabelLength * i + 800 , 1000, yLabelLength * i + 800)
    }
    for (var i = 0; i < 11; i++ ){
        var xLabelValues = [i] * 10
        xLabelValues.toString()
        fill(160)
        stroke(190)
        line( 100*i, 780, 100*i, 1740)
        noStroke()
        text(xLabelValues, 100 * i + 5, 1760)
    }
}

function percentBars() {
    for (var i = 0; i < percentBar.length; i++) {
        var yLabelLength = ( barWidth * i + 20 )
        fill(brand[1])
        rect(0, yLabelLength + 760, percentBar[i][1] * 10, 20)
    }
}

function percentLegend() {
    textStyle(NORMAL)
    textSize(16)
    textAlign(CENTER)
    text('Estado', 1250, 150)
    rotate(-1.5707963268)
    text('Porcentaje', 530, 1790)
}