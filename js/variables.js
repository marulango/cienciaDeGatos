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
    var puchi = Math.round(statePets[i] / poblacionTotal[i] * 100)
    percent.push(puchi)
}
