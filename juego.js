let nombre = prompt("Ingrese su nombre");
alert("¡Bienvenidx " +nombre+ "! ¡Empecemos a jugar!");

let puntos = 10;


let pista1 = prompt("Ingresá un lenguaje de programación");
if((pista1 == "javascript") && (pista1 == "JAVASCRIPT") && (pista1 == "Javascript") && (pista1 == "JavaScript")){
    alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
}else{
    alert("La palabra ingresada " + pista1 + " es incorrecta. Intentá nuevamente.");
    let error = "";
    while(error != pista1){
        error = prompt("Ingresá un lenguaje de programación");
        alert("La palabra ingresada " + error + " es incorrecta. Intentá nuevamente.");

        if((error == "javascript") && (error == "JAVASCRIPT") && (error == "Javascript") && (error == "JavaScript")){
            alert("La palabra ingresada " + error + " es CORRECTA y sumaste " + puntos + " puntos!");
            break;
        }
    }
}





    







