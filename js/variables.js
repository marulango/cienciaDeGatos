var statePets = []
var nombreEstado = []
var poblacionTotal = []

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
