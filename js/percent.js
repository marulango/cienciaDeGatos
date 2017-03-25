function percentGrid() {
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

function percentBars() {
for (var i = 0; i < statePets.length; i++) {
        stroke(brand[1])
        var yPosition = ( barWidth * i + 20 )
        //statePets.sort(function(a, b) {return b-a}) Ponle el nombre al array para que no te confundas :v
        fill(brand[1])
        rect(0, yPosition + 820, statePets[i], 20)
    }
}