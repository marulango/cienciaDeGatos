/* singles 
function grid() {
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
        var xLabelValues = [i] * 2
        xLabelValues.toString()
        fill(160)
        noStroke()
        textSize(10)
        text(xLabelValues, 90, -50 * i + 700)
        stroke(190)
        line( 60 * i + 120, 200, 60 * i + 120, 700)
    }
}

function bars() {
    noStroke()
    var yLabelLength = 20 
    fill(clearedGreen[0])
    rect(160, 700, 200, -singleDudesPercent * 25)
    fill(guidanceBlue[1])
    rect(380, 700, 200, -singleLadiesPercent * 25 )
    fill(255)
    rect(150, 320, 50, 20)
    rect(375, 338, 50, 15)
    fill(160)
    text(singleDudesPercent + ' %', 160, 335)
    text(singleLadiesPercent + ' %', 380, 350)

}

function legend() {
    stroke(190)
    fill(255)
    rect(510, 210, 200, 80)
    fill(clearedGreen[0])
    noStroke()
    rect(530, 230, 10, 10)
    fill(guidanceBlue[0])
    rect(530, 260, 10, 10)
    fill(160)
    text('Hombres', 560, 239)
    text('Mujeres', 560, 270)
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Solteros (2012)', 415, 160)
    textSize(12)
    textStyle(NORMAL)
    text('Mujeres', 475, 730)
    text('Hombres', 255, 730)
    rotate(1.5707963268)
    text('Porcentaje', 450, -50)
}

*/ 


function grid() {
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
        var xLabelValues = [i] * 2
        xLabelValues.toString()
        fill(160)
        noStroke()
        textSize(10)
        text(xLabelValues, 90, -50 * i + 700)
        stroke(190)
        line( 60 * i + 120, 200, 60 * i + 120, 700)
    }
}

function bars() {
    noStroke()
    var yLabelLength = 20 
    fill(clearedGreen[0])
    rect(160, 700, 200, -crazyCatDude * 25)
    fill(guidanceBlue[0])
    rect(380, 700, 200, -crazyCatLady * 25)
    fill(255)
    rect(150, 400, 50, 20)
    rect(375, 410, 50, 20)
    fill(160)
    text(crazyCatDude + ' %', 160, 412)
    text(crazyCatLady + ' %', 380, 425)

}

function legend() {
    stroke(190)
    fill(255)
    rect(510, 210, 200, 80)
    fill(clearedGreen[0])
    noStroke()
    rect(530, 230, 10, 10)
    fill(guidanceBlue[0])
    rect(530, 260, 10, 10)
    fill(160)
    text('Hombres', 560, 239)
    text('Mujeres', 560, 270)
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Solteros(as) con gatos (2012)', 415, 160)
    textSize(12)
    textStyle(NORMAL)
    text('Mujeres', 475, 730)
    text('Hombres', 255, 730)
    rotate(1.5707963268)
    text('Porcentaje', 450, -50)
}


/*

 function grid() {
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

function bars() {
    noStroke()
    var yLabelLength = 20 
    fill(clearedGreen[0])
    rect(160, 700, 200, -widowDude * 5)
    fill(guidanceBlue[0])
    rect(380, 700, 200, -widowLady * 5)
    fill(255)
    rect(150, 540, 50, 20)
    rect(375, 310, 50, 20)
    fill(160)
    text(widowDude + ' %', 160, 555)
    text(widowLady + ' %', 380, 325)

}

function legend() {
    stroke(190)
    fill(255)
    rect(510, 210, 200, 80)
    fill(clearedGreen[0])
    noStroke()
    rect(530, 230, 10, 10)
    fill(guidanceBlue[0])
    rect(530, 260, 10, 10)
    fill(160)
    text('Hombres', 560, 239)
    text('Mujeres', 560, 270)
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Separados(a) / Divorciados(a) / Viudos(a) (2012) ', 415, 160)
    textSize(12)
    textStyle(NORMAL)
    text('Mujeres', 475, 730)
    text('Hombres', 255, 730)
    rotate(1.5707963268)
    text('Porcentaje', 450, -50)
}
*/ 
/*
 function grid() {
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

function bars() {
    noStroke()
    var yLabelLength = 20 
    fill(clearedGreen[0])
    rect(160, 700, 200, -widowCatDude * 5)
    fill(guidanceBlue[0])
    rect(380, 700, 200, -widowCatLady * 5)
    fill(255)
    rect(150, 570, 50, 20)
    rect(375, 400, 50, 20)
    fill(160)
    text(widowCatDude + ' %', 160, 580)
    text(widowCatLady + ' %', 380, 410)

}

function legend() {
    stroke(190)
    fill(255)
    rect(510, 210, 200, 80)
    fill(clearedGreen[0])
    noStroke()
    rect(530, 230, 10, 10)
    fill(guidanceBlue[0])
    rect(530, 260, 10, 10)
    fill(160)
    text('Hombres', 560, 239)
    text('Mujeres', 560, 270)
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text('Viudos(as) con gatos (2012)', 415, 160)
    textSize(12)
    textStyle(NORMAL)
    text('Mujeres', 475, 730)
    text('Hombres', 255, 730)
    rotate(1.5707963268)
    text('Porcentaje', 450, -50)
}
*/