var barWidth = 30
var sunsetOrange = '#FF883E'
var clearedGreen = '#79DD15'
var brand = ['#EF2B4C','#FF3E5F', '#FF7190', '#FF9CB6', '#FFC7D8']
var guidanceBlue = '#3F91FF'
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
var singleLadiesPercent = solteros.mujeres.people / solteros.muestraTotal.people * 100
var singleDudesPercent = solteros.hombres.people / solteros.muestraTotal.people * 100
var singleDudesPercent = singleDudesPercent.toFixed(2)
var singleLadiesPercent = singleLadiesPercent.toFixed(2)

var crazyCatLady = singleLadiesPercent * 100 / percentCats
var crazyCatDude = singleDudesPercent * 100 / percentCats




