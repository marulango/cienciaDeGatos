var barWidth = 30
var sunsetOrange = '#FF883E'
var clearedGreen = ['#79DD15', '#97EA2D', '#A8F43D']
var brand = ['#EF2B4C','#FF3E5F', '#FF7190', '#FF9CB6', '#FFC7D8']
var guidanceBlue = ['#3F91FF', '#61ADFF', '#7DBBFF']
var main = '#939598'


var statePets = []
var nombreEstado = []
var poblacionTotal = []
var percent = []
var yLabel = []
var yLabelValue = []
var percentBar = []
var xLabel = []
var xLabelValue = []

for (var key in hogares) {
    var estado = hogares[key]

    var { 
        diconsa, 
        liconsa, 
        particular, 
        nope, 
        mercado, 
        tianguis, 
        ambulante, 
        abarrotes, 
        especializada, 
        supermercado, 
        departamentales, 
        extranjero, 
        membresia, 
        pob,
        edo 
    } = estado

    //Total de mascotas en el estado
    var totalEstado = pob - (diconsa + liconsa + particular + nope + mercado + tianguis + ambulante + abarrotes + especializada + supermercado + departamentales + extranjero + membresia) 

    statePets.push(totalEstado)
    nombreEstado.push(edo)
    poblacionTotal.push(pob)
}

for (var i = 0; i < statePets.length; i++) {

    var percentile = Math.round(statePets[i] * 100 / poblacionTotal[i] )
    percent.push(percentile)
    percentBar.push([nombreEstado[i], percent[i]])
    var totalPop = poblacionTotal.reduce((a, b) => a + b, 0);
    var totalPets = statePets.reduce((a, b) => a + b, 0);
    var percentPets =  totalPets * 100 / totalPop
    var percentPets = percentPets.toFixed(2)
}

var percentCats = ((30 / 100 * percentPets))
var percentCats = percentCats.toFixed(2)
var singleLadiesPercent = solteros.mujeres.people / solteros.muestraTotal.people * 100
var singleDudesPercent = solteros.hombres.people / solteros.muestraTotal.people * 100
var singleDudesPercent = singleDudesPercent.toFixed(2)
var singleLadiesPercent = singleLadiesPercent.toFixed(2)

var crazyCatLady = singleLadiesPercent / 1.30
var crazyCatDude = singleDudesPercent / 1.30
var crazyCatDude = crazyCatDude.toFixed(2)
var crazyCatLady = crazyCatLady.toFixed(2)

var widowLady = viudos.mujeres.people / viudos.muestraTotal.people  * 100
var widowDude = viudos.hombres.people / viudos.muestraTotal.people  * 100
var widowLady = widowLady.toFixed(2)
var widowDude = widowDude.toFixed(2)

var widowCatLady = widowLady / 1.30
var widowCatLady = widowCatLady.toFixed(2)
var widowCatDude = widowDude / 1.30
var widowCatDude = widowCatDude.toFixed(2)


