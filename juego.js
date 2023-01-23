let nombre = prompt("Ingrese su nombre");
alert("¡Bienvenidx " +nombre+ "! ¡Empecemos a jugar!");

let puntos = 10;
let pista1 = "JAVASCRIPT"

pista1 = prompt("Ingresá un lenguaje de programación. Ej: LENGUAJE");
while(pista1 != "JAVASCRIPT"){
    alert("La palabra ingresada " + pista1 + " es incorrecta. Intentá nuevamente.");
    pista1 = prompt("Ingresá un lenguaje de programación. Ej: LENGUAJE");
}
if (pista1 == "JAVASCRIPT"){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}


let pista2 = "MESSI"
pista2 = prompt("Ingresá el apellido del jugador actual de la selección Argentina que tiene la camiseta 10. Ej: MARADONA");
while(pista2 != "MESSI"){
    alert("La palabra ingresada " + pista2 + " es incorrecta. Intentá nuevamente.");
    pista2 = prompt("Ingresá el apellido del jugador de la selección Argentina que tiene la camiseta 10. Ej: MARADONA");
}
if (pista2 == "MESSI"){
    alert("La palabra ingresada " + pista2 + " es CORRECTA y sumaste " + puntos + " puntos!");
}


let pista3 = "3"
pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina. Ej: 1");
while(pista3 != "3"){
    alert("La palabra ingresada " + pista3 + " es incorrecta. Intentá nuevamente.");
    pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina. Ej: 1");
}
if (pista3 == "3"){
    alert("La palabra ingresada " + pista3 + " es CORRECTA y sumaste " + puntos + " puntos!");
}


let resultado = (puntos *= 3);
alert("Felicidades, adivinaste las 3 palabras y sumaste: " + resultado + " puntos");