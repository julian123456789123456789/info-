
let nombre= prompt("ingrese su nombre")
let w
do{
    w = parseFloat(prompt("ingresesu edad"))
}while(Number.isNaN(w) )
if(w<12){
    console.log(`hola ${nombre},`)
}else{
    if(w<50)console.log(` buenos días ${nombre}`)
    else {
        if(w>50)console.log(`buenos días respetado ${nombre}. `)
    }

}