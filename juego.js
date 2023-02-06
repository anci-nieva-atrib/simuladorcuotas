// let nombre = prompt("Ingrese su nombre");
// alert("¡Bienvenidx " +nombre+ "! ¡Empecemos a jugar!");

// let puntos = 10;
// let pista1 = "JAVASCRIPT"
// let pista2 = "MESSI"
// let pista3 = "3"
// let intentos = 1;
// let resultado = 0; //porque todavia no hay puntos


// pista1 = prompt("Ingresá un lenguaje de programación. Ej: LENGUAJE");

// while(pista1 != "JAVASCRIPT" && intentos < 3){
//     alert("Intento " + intentos + " de 3. La palabra ingresada " + pista1 + " es incorrecta.");
//     pista1 = prompt("Ingresá un lenguaje de programación. Ej: LENGUAJE");

//     if (pista1 == "JAVASCRIPT"){
//         resultado = resultado + puntos;
//         alert("La palabra ingresada " + pista1 + " es CORRECTA y sumaste " + puntos + " puntos!");
//         intentos = 1;
//         break;
//     }
//     intentos++
// }



// pista2 = prompt("Ingresá el apellido del jugador actual de la selección Argentina que tiene la camiseta 10. Ej: MARADONA");
// while(pista2 != "JAVASCRIPT" && intentos < 3){
//     alert("Intento " + intentos + " de 3. La palabra ingresada " + pista2 + " es incorrecta.");
//     pista2 = prompt("Ingresá el apellido del jugador actual de la selección Argentina que tiene la camiseta 10. Ej: MARADONA");

//     if (pista2 == "JAVASCRIPT"){
//         alert("La palabra ingresada " + pista2 + " es CORRECTA y sumaste " + puntos + " puntos!");
//         intentos = 1;
//         break;
//     }
//     intentos++
// }


// pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina. Ej: 1");
// while(pista3 != "JAVASCRIPT" && intentos < 3){
//     alert("Intento " + intentos + " de 3. La palabra ingresada " + pista3 + " es incorrecta.");
//     pista3 = prompt("Ingresá el de copas del mundo que ganó Argentina. Ej: 1");

//     if (pista3 == "JAVASCRIPT"){
//         alert("La palabra ingresada " + pista3 + " es CORRECTA y sumaste " + puntos + " puntos!");
//         intentos = 1;
//         break;
//     }
//     intentos++
// }


// alert("Felicidades, adivinaste las 3 palabras y sumaste: " + resultado + " puntos");






/////////////////////////////////////////////


// A este objeto lo puedo agregar al momento de que el usuario ingresa el tipo de tarjeta que tiene. Entonces le doy los datos de financiacion.
// Cuando el usuario indica que cuotas quiere, le aparece el llamado del metodo que se ajuste.
class Tarjetas {
    constructor(banco, tipo, cuotas) {
        this.banco = banco;
        this.tipo  = tipo;
        this.cuotas = parseInt(cuotas);
    }
    nombreBanco(){
        console.log(`Tu banco es ${this.banco}`);
    }
    variante(){
        console.log(`Tu tarjeta es ${this.tipo}`);
    }
    numeroCuotas(){
        console.log(`Las cuotas sin interés disponibles son ${this.cuotas}`);
    }
}
const tarjetaVisaHSBC = new Tarjetas("Banco HSBC", "Visa", 3);
const tarjetaMasterHSBC = new Tarjetas("Banco HSBC", "Mastercard", 6);
const tarjetaVisaSantander = new Tarjetas("Banco Santander", "Visa", 1);
const tarjetaMasterSantander = new Tarjetas("Banco Santander", "Mastercard", 12);
tarjetaVisaHSBC.nombreBanco();
tarjetaVisaHSBC.variante();
tarjetaVisaHSBC.numeroCuotas(); //podria no poner las cuotas para mencionarlas solo con el array




// class Smartphone {
//     constructor(marca, modelo, memoria, color) {
//         this.marca = marca;
//         this.modelo  = modelo;
//         this.memoria  = memoria;
//         this.color  = color;
//     }
//     marcaSmartphone(){
//         console.log(`Marca: ${this.marca}`);
//     }
//     modeloSmartphone(){
//         console.log(`Modelo: ${this.modelo}`);
//     }
//     memoriaSmartphone(){
//         console.log(`Memoria: ${this.memoria}`);
//     }
//     colorSmartphone(){
//         console.log(`Color: ${this.color}`);
//     }
// }

// const iPhone14 = new Smartphone("Apple", "Iphone 14", "128 GB", "Medianoche");
// const iPhone14Pro = new Smartphone("Apple", "Iphone 14 Pro", "256 GB", "Negro espacial");
// const s23 = new Smartphone("Samsung", "S23", "128 GB", "Phantom Black");
// const s23Ultra = new Smartphone("Samsung", "S23 Ultra", "256 GB", "Cream");




// if (preguntaMarca == "APPLE"){
//     alert("Te mostramos por consola los Iphone disponibles.");

//     iPhone14.marcaSmartphone(),
//     iPhone14.modeloSmartphone(),
//     iPhone14.memoriaSmartphone(),
//     iPhone14.colorSmartphone(),

//     iPhone14Pro.marcaSmartphone(),
//     iPhone14Pro.modeloSmartphone(),
//     iPhone14Pro.memoriaSmartphone(),
//     iPhone14Pro.colorSmartphone(),

//     preguntaModelo = prompt("¿Cuál modelo te gustaría comprar y financiar?", "Iphone 14 Pro");

// }else if(preguntaMarca == "SAMSUNG"){
//     alert("Te mostramos por consola los Samsung disponibles.");

//     s23.marca();
//     s23.modelo();
//     s23.memoria();
//     s23.color();

//     s23Ultra.marca();
//     s23Ultra.modelo();
//     s23Ultra.memoria();
//     s23Ultra.color();

//     preguntaModelo = prompt("¿Cuál modelo te gustaría comprar y financiar?", "S23 Ultra");

// } else{
//     alert("Te mostramos por consola todos los Smartphones disponibles.");

//     iPhone14.marca();
//     iPhone14.modelo();
//     iPhone14.memoria();
//     iPhone14.color();

//     iPhone14Pro.marca();
//     iPhone14Pro.modelo();
//     iPhone14Pro.memoria();
//     iPhone14Pro.color();

//     s23.marca();
//     s23.modelo();
//     s23.memoria();
//     s23.color();

//     s23Ultra.marca();
//     s23Ultra.modelo();
//     s23Ultra.memoria();
//     s23Ultra.color();


//     preguntaModelo = (prompt("¿Cuál modelo te gustaría comprar y financiar?", "Iphone 14 Pro") || "").toUpperCase();

//     if((preguntaModelo == "IPHONE 14 PRO")||(preguntaModelo == "IPHONE14 PRO")||(preguntaModelo == "IPHONE14PRO")){
//         alert(`El precio es $${precioIphone14Pro}`);
//     }
//     else if((preguntaModelo == "IPHONE 14")||(preguntaModelo == "IPHONE14")){
//         alert(`El precio es $${precioIphone14}`);
//     }
//     else if((preguntaModelo == "S23 ULTRA")||(preguntaModelo == "S23ULTRA")||(preguntaModelo == "S 23 ULTRA")){
//         alert(`El precio es $${precioS23Ultra}`);
//     }
//     else if((preguntaModelo == "S23")||(preguntaModelo == "S 23")){
//         alert(`El precio es $${precioS23}`);
//     }
//     else{
//         while(preguntaModelo != "ESC"){
//             alert("No encontramos ese modelo, por favor, intentalo nuevamente.");
//             //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//             preguntaModelo = (prompt("¿Cuál modelo te gustaría comprar y financiar?", "Iphone 14 Pro") || "").toUpperCase();
//         }
//     }
// }

// for(let i = 0; i < miArray.length; i++){
//     Consolé.log(miArray[i]);
//     Consolé.log("Tipo de tarjeta: " + miArray[i].tarjeta);
//     Consolé.log("Banco: " + miArray[i].banco);
//     Consolé.log("Cuotas sin interes: " + miArray[i].cuotas);
// }









// //ARRAY
// const cantidadCuotas = [1, 3, 6, 9, 12, 18];
// alert(cantidadCuotas); //aca puedo preguntar en cuantas cuotas lo queres hacer? y que llame a un indice.

// const tiposDeBancos = ["Banco Santander","Banco HSBC","Banco Francés","Banco Galicia",];
// alert(tiposDeBancos); //aca puedo preguntar al usuario por su banco, y llamar al indice



// //Como incorporar ARRAY en un bucle FOR.Tambien se puede recorrer el array con FOR/OF
// const cantidadCuotasS = [1, 3, 6, 9, 12, 18];
// let financiacion;

// for(let i = 0; i < cantidadCuotasS.length; i++){
//     console.log(financiacion);
// }


// //EJEMPLO ARRAY Y OBJETOS


