let nombre = (prompt("Hola, somos Smartphone Store. ¿Cómo te llamás?") || "").toUpperCase();
let preguntaMarca = (prompt(`${nombre}, ¿sobre qué marca de smartphone querés consultar? ¿Apple, Samsung o las dos?`, `Apple`) || "").toUpperCase();

const smartphone = [
    { 
        marca: "Apple",
        modelo: "Iphone 14",
        memoria: "128 GB",
        color: "Medianoche",
    },
    { 
        marca: "Apple",
        modelo: "Iphone 14 Pro",
        memoria: "256 GB",
        color: "Negro espacial",
    },
    { 
        marca: "Samsung",
        modelo: "S23",
        memoria: "256 GB",
        color: "Phantom Black",
    },
    { 
        marca: "Samsung",
        modelo: "S23 Ultra",
        memoria: "256 GB",
        color: "Cream",
    },
];


let preguntaModelo;


if (preguntaMarca == "APPLE"){
    alert("Te mostramos por consola los Iphone disponibles.");

    console.log(smartphone[0]);
    console.log(smartphone[1]);
    preguntaModelo = (prompt("¿Cuál modelo te gustaría comprar y financiar?", "Iphone 14 Pro") || "").toUpperCase();

}else if(preguntaMarca == "SAMSUNG"){
    alert("Te mostramos por consola los Samsung disponibles.");

    console.log(smartphone[2]);
    console.log(smartphone[3]);
    preguntaModelo = (prompt("¿Cuál modelo te gustaría comprar y financiar?", "S23 Ultra") || "").toUpperCase();

} else{
    alert("Te mostramos por consola todos los Smartphones disponibles.");

    for(let i = 0; i < smartphone.length; i++){
       console.log(smartphone[i]);
    }
    preguntaModelo = (prompt("¿Cuál modelo te gustaría comprar y financiar?", "Iphone 14 Pro") || "").toUpperCase();
}


const precioIphone14 = 472000;
const precioIphone14Pro = 734405;
const precioS23 = 319999;
const precioS23Ultra = 459999;


const precios = [
    {modelo: "Iphone 14", precio: precioIphone14},
    {modelo: "Iphone 14 Pro", precio: precioIphone14Pro},
    {modelo: "S23", precio: precioS23},
    {modelo: "S23 Ultra", precio: precioS23Ultra},
];


let precioSmartphoneElegido = 0;


if((preguntaModelo == "IPHONE 14 PRO")||(preguntaModelo == "IPHONE14 PRO")||(preguntaModelo == "IPHONE14PRO")){
    alert(`El precio es $${precioIphone14Pro}`);
    precioSmartphoneElegido += precioIphone14Pro;
}
else if((preguntaModelo == "IPHONE 14")||(preguntaModelo == "IPHONE14")){
    alert(`El precio es $${precioIphone14}`);
    precioSmartphoneElegido += precioIphone14;
}
else if((preguntaModelo == "S23 ULTRA")||(preguntaModelo == "S23ULTRA")||(preguntaModelo == "S 23 ULTRA")){
    alert(`El precio es $${precioS23Ultra}`);
    precioSmartphoneElegido += precioS23Ultra;
}
else if((preguntaModelo == "S23")||(preguntaModelo == "S 23")){
    alert(`El precio es $${precioS23}`);
    precioSmartphoneElegido += precioS23;
}
else{
    alert("Te mostramos por consola los precios de todos los Smartphones disponibles.");
    precios.forEach((precio) => {
        console.log(precio);
    });
}   


const tarjetas = [
    {tarjeta: "VISA", cuotas: "1, 3 y 6 sin interés"},
    {tarjeta: "MASTERCARD", cuotas: "1, 3, 6 y 12 sin interés"}
];


let preguntaTarjeta = (prompt("¿Con qué tarjeta vas a pagar? Opciones disponibles: Visa o Mastercard", "Visa") || "").toUpperCase();
alert(`Te mostramos en la consola las cuotas sin interés disponibles para pagos con ${preguntaTarjeta}`);


let montoTotal = precioSmartphoneElegido;
let preguntaCuotas;
const cuotasVisa = [1, 3, 6];
const cuotasMastercard = [1, 3, 6, 12];
let cadaCuota;


function forDentroDeElse (tipoTarjeta){
    for (const todosLosPrecios of precios) {

        for(let i = 0; i < tipoTarjeta.length; i++){
            cadaCuota = tipoTarjeta[i];
            console.log(`El precio del ${todosLosPrecios.modelo} en ${cadaCuota} cuota/s es $${(todosLosPrecios.precio/cadaCuota)}`);
        }
    }
}

function dentroDeElse(tipoTarjeta){
    if(preguntaModelo != ""){
        for (const todasLasCuotas of tipoTarjeta) {
            console.log(`El precio en ${todasLasCuotas} cuota/s es $${(montoTotal/todasLasCuotas)}`);
        }
        console.log("Además, si llevás el smartphone en 1 cuota, tenés 25% de descuento");
    }else{
        alert("Si no pudiste elegir un smartphone o la forma de pago, te brindamos en consola todos los precios y su financiación.");
        
        forDentroDeElse (tipoTarjeta);
        
        console.log("Además, si llevás el smartphone en 1 cuota, tenés 25% de descuento");
    }
}



if(preguntaTarjeta == "VISA"){
    console.log(tarjetas.find((tarjeta) => tarjeta.tarjeta === preguntaTarjeta));

    preguntaCuotas = parseInt(prompt("¿En cuántas cuotas te gustaría financiar? Ingresá un número"));
    
    function calculoPagos(tipoTarjeta,cantidadCuotas){

        if((preguntaModelo != "") && (cantidadCuotas == tipoTarjeta.find((cuotas) => cuotas === 1))){
            montoFinanciado = (montoTotal * 0.75);
            alert(`${nombre}, si llevas el ${preguntaModelo} en ${cantidadCuotas} cuota, tenés 25% de descuento y pagarías $${montoFinanciado}`);

        }else if((preguntaModelo != "") &&((cantidadCuotas === 3)||(cantidadCuotas === 6))){
            montoFinanciado = (montoTotal/cantidadCuotas);
            alert(`${nombre}, si llevas el ${preguntaModelo} en ${cantidadCuotas} cuotas, cada cuota te queda en $${montoFinanciado}`);
        }
        else{
            dentroDeElse(cuotasVisa);
        }
    };
    calculoPagos(cuotasVisa,preguntaCuotas);

    
}else if(preguntaTarjeta == "MASTERCARD"){
    console.log(tarjetas.find((tarjeta) => tarjeta.tarjeta === preguntaTarjeta));

    preguntaCuotas = (parseInt(prompt("¿En cuántas cuotas te gustaría financiar? Ingresá un número")) || "");

    function calculoPagos(tipoTarjeta,cantidadCuotas){

        if((preguntaModelo != "") && (cantidadCuotas == tipoTarjeta.find((cuotas) => cuotas === 1))){
            montoFinanciado = (montoTotal * 0.75);
            alert(`${nombre}, si llevas el ${preguntaModelo} en ${cantidadCuotas} cuota, tenés 25% de descuento y pagarías $${montoFinanciado}`);
        }
        else if((preguntaModelo != "") && ((cantidadCuotas === 3)||(cantidadCuotas === 6)||(cantidadCuotas === 12))){
            montoFinanciado = (montoTotal/cantidadCuotas);
            alert(`${nombre}, si llevas el ${preguntaModelo} en ${cantidadCuotas} cuotas, cada cuota te queda en $${montoFinanciado}`);
        }
        else{
            dentroDeElse(cuotasMastercard);
        }
    };
    calculoPagos(cuotasMastercard,preguntaCuotas);
}
else{
    tarjetas.forEach((tarjeta) => {
        console.log(tarjeta);
    });

    alert("Si no pudiste elegir un smartphone o la forma de pago, te brindamos en consola todos los precios y su financiación.");

    forDentroDeElse(cuotasMastercard);

    console.log("Si llevás el smartphone en 1 cuota, tenés 25% de descuento");
}





// Tienen que almacenar datos en el storage y recuperar esos datos
// setItem y getItem
// Ojo datos relacionados con el proyecto
// Si tienen un carrito de compras deben tener los objetos en un json
//nada de alert y prompt
//almacenar en storage e imprimir los datos en pantalla, los datos guardados por storage


find