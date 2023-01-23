function calculoPagos(){
	
	let nombre = prompt("Hola! Ingresá tu nombre");
	let montoTotal = parseInt(prompt(nombre + ", ingresá el monto de dinero que querés financiar en cuotas"));
	alert("Querés financiar $" + montoTotal)
	
	let cantidadCuotas = parseInt(prompt("Ahora ingresá el número de cuotas en que te gustaría financiar"));

    let cuotas

	for (cuotas = 1; cuotas <= 12; cuotas++) {
		if(cuotas == cantidadCuotas){
		break;
	    } 
    }alert("Querés financiar en " + cuotas + " cuotas");

		
	let montoFinanciado = (montoTotal/cuotas);
	alert(nombre + ", pagando $" + montoTotal + " en " + cantidadCuotas + " cuotas, cada cuota te queda en $" + montoFinanciado);
}
calculoPagos ()