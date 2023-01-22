let nombre = prompt("Ingrese su nombre");
alert("¡Bienvenidx " +nombre+ "! ¡Empecemos a jugar!");

let puntos = 10;

let pista1 = prompt("Ingresá un lenguaje de programación");
if(pista1 == "javascript"){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista1 =="JAVASCRIPT"){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista1 =="Javascript"){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista1 =="JavaScript"){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else{
    do{
        alert("La palabra ingresada " + pista1 + " es incorrecta. Intentá nuevamente.");
        pista1 = prompt("Ingresá un lenguaje de programación");
    }while(pista1 == false)
        alert("La palabra ingresada " + pista1 + " es incorrecta. Intentá nuevamente.");
        pista1 = prompt("Ingresá un lenguaje de programación");

}



let pista2 = prompt("Ingresá el apellido del jugador de la selección Argentina que tiene la camiseta 10");
if(pista2 == "messi"){
    alert("La palabra ingresada " + pista2 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista2 =="Messi"){
    alert("La palabra ingresada " + pista2 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista2 =="MESSI"){
    alert("La palabra ingresada " + pista2 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else{
    do{
        alert("La palabra ingresada " + pista2 + " es incorrecta. Intentá nuevamente.");
        pista2 = prompt("Ingresá el apellido del jugador de la selección Argentina que tiene la camiseta 10");
    }while(pista2 == false)
    alert("La palabra ingresada " + pista2 + " es incorrecta. Intentá nuevamente.");
    pista2 = prompt("Ingresá el apellido del jugador de la selección Argentina que tiene la camiseta 10");

}


let pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina");
if(pista3 == "3"){
    alert("La palabra ingresada " + pista3 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista3 =="tres"){
    alert("La palabra ingresada " + pista3 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else if (pista3 =="TRES"){
    alert("La palabra ingresada " + pista3 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else{
    do{
        alert("La palabra ingresada " + pista3 + " es incorrecta. Intentá nuevamente.");
        pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina");
    }while(pista3 == false)
    alert("La palabra ingresada " + pista3 + " es incorrecta. Intentá nuevamente.");
    pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina");
}



let resultado = (puntos *= 3);
alert("Felicidades, adivinaste las 3 palabras y sumaste: " + resultado + " puntos");





    







