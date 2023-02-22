//Estos son los smartphones disponibles
const smartphone = [
    { 
        id:1,
        img:"./Multimedia/iphone14.webp",
        marca: "Apple",
        modelo: "Iphone 14",
        memoria: "128 GB",
        color: "Blanco Estelar",
        precio: 487999,
    },
    { 
        id:2,
        img:"./Multimedia/iphone14pro.webp",
        marca: "Apple",
        modelo: "Iphone 14 Pro",
        memoria: "256 GB",
        color: "Morado Oscuro",
        precio: 704499,
    },
    { 
        id:3,
        img:"./Multimedia/s23.webp",
        marca: "Samsung",
        modelo: "S23",
        memoria: "128 GB",
        color: "Phantom Black",
        precio: 299999,
    },
    { 
        id:4,
        img:"./Multimedia/s23ultra.webp",
        marca: "Samsung",
        modelo: "S23 Ultra",
        memoria: "256 GB",
        color: "Green",
        precio: 459999,
    },
];




//Aqui estan las acciones asignadas a cada boton que filtra por marca
let mostrarProductosApple = document.querySelector("#botonMarcaApple");
mostrarProductosApple.addEventListener("click", () => {
    let productosApple = smartphone.filter(producto => producto.marca === "Apple");
    crearProductos(productosApple);
    mostrarContenido("#paso2");
});

const mostrarProductosSamsung = document.querySelector("#botonMarcaSamsung");
mostrarProductosSamsung.addEventListener("click", () => {
    const productosSamsung = smartphone.filter(producto => producto.marca === "Samsung");
    crearProductos(productosSamsung);
    mostrarContenido("#paso2");
});

const mostrarProductosTodos = document.querySelector("#botonMarcaLasDos");
mostrarProductosTodos.addEventListener("click", () => {
    const todosLosProductos = smartphone;
    crearProductos(todosLosProductos);
    mostrarContenido("#paso2");
});



//Aqui esta la funcion para crear cada card de producto
const galeriaDeProductos = document.querySelector("#seleccionarModelo");
const arrayDeProductosAgregados = JSON.parse(localStorage.getItem("productosAgregados")) || [];
const itemsEnIconoCarrito = document.querySelector("#cantidadItemsCarrito");
actualizarCantidadCarrito ()



//En este condicional indicamos que si hay productos en el carrito, cuando el usuario vuelva a ingresar pueda ver los botones de tarjetas para no tener que seleccionar el telefono de nuevo, ya que lo tiene guardado en carrito.
if(arrayDeProductosAgregados.length > 0){
    mostrarContenido("#seleccionarTarjeta");
}


//En esta funcion creamos cada producto
function crearProductos(smartphone){
    galeriaDeProductos.innerHTML = "";
    
    smartphone.forEach((smartphone) => {
    
        const cadaProducto = document.createElement("div");
        cadaProducto.className = "cadaCard";
        
        cadaProducto.innerHTML = `
            <img src="${smartphone.img}" class="cardImagen" alt="${smartphone.modelo}">
            <div class="cardTextos">
                <p class="cardMarca">${smartphone.marca}</p>
                <p class="cardTitulo">${smartphone.modelo}</p>
                <p class="cardDetalle">Memoria: ${smartphone.memoria}</p>
                <p class="cardDetalle">Color: ${smartphone.color}</p>
                <p class="cardPrecio">$${smartphone.precio}</p>
                
        </div>`;

            const botonAgregar = document.createElement("button");
            botonAgregar.innerText = "AGREGAR"
            cadaProducto.appendChild(botonAgregar);
            botonAgregar.className = "botonAgregar";

            galeriaDeProductos.appendChild(cadaProducto);

            
            botonAgregar.addEventListener("click", () => {
                if(arrayDeProductosAgregados.some((producto) => producto.id === smartphone.id)){
                    let indice = arrayDeProductosAgregados.findIndex((producto) => producto.id === smartphone.id);
                    arrayDeProductosAgregados[indice].cantidad++;
                }else{
                    smartphone.cantidad = 1;
                    arrayDeProductosAgregados.push(smartphone);
                }

                if(cuotaSeleccionada !== null){
                    actualizarResultadosFinanciacion()
                }

                actualizarCantidadCarrito()
                
                localStorage.setItem("productosAgregados", JSON.stringify(arrayDeProductosAgregados));

                mostrarContenido("#seleccionarTarjeta");
            });
    });

};



//Funciones mostrar y ocultar contenido del HTML
function mostrarContenido(id){
    document.querySelector(id).className="";
}


mostrarApplePorDefecto()



//Este es el array de cuotas disponibles para cada tarjeta
const cuotas = [
    { 
        id:1,
        tipo:"VISA",
        cuotas: 1,
    },
    { 
        id:2,
        tipo:"VISA",
        cuotas: 3,
    },
    { 
        id:3,
        tipo:"VISA",
        cuotas: 6,
    },
    { 
        id:4,
        tipo:"MASTERCARD",
        cuotas: 1,
    },
    { 
        id:5,
        tipo:"MASTERCARD",
        cuotas: 12,
    },
];



//Aqui estan las acciones asignadas a cada boton que filtra por marca
let mostrarCuotasVisa = document.querySelector("#botonVisa");
mostrarCuotasVisa.addEventListener("click", () => {
    const cuotasParaVisa = cuotas.filter(producto => producto.tipo === "VISA");
    crearBotonesCuotas(cuotasParaVisa);
    mostrarContenido("#paso4");
});

mostrarApplePorDefecto()

let mostrarCuotasMastercard = document.querySelector("#botonMastercard");
mostrarCuotasMastercard.addEventListener("click", () => {
    const cuotasParaMastercard = cuotas.filter(producto => producto.tipo === "MASTERCARD");
    crearBotonesCuotas(cuotasParaMastercard);
    mostrarContenido("#paso4");
});



//Aqui esta la funcion para la seleccion de cuotas
const contenedorOpcionesCuotas = document.querySelector("#seleccionarCuotas");
const contenedorResultadoFinanciacion = document.querySelector("#resultadoFinanciacion");

let cuotaSeleccionada = null;
let tarjetaSeleccionada = null;

function crearBotonesCuotas(cuotas){
    contenedorOpcionesCuotas.innerHTML = "";
    contenedorResultadoFinanciacion.innerHTML = "";

    cuotas.forEach((cuotas) => {
    
        const cadaCuotaDisponible = document.createElement("div");
        cadaCuotaDisponible.innerHTML = `

        <button id="${cuotas.cuotas}" type="button" class="botonCuota"> ${cuotas.cuotas} cuotas sin interés con ${cuotas.tipo} </button>
        `;
        contenedorOpcionesCuotas.appendChild(cadaCuotaDisponible);

        const botonCuota = document.getElementById(`${cuotas.cuotas}`);
        botonCuota.addEventListener("click", () => {
            cuotaSeleccionada = botonCuota.id;
            tarjetaSeleccionada = cuotas.tipo;
            actualizarResultadosFinanciacion ()
        });
    });

};



//En esta funcion creamos el detalle de los resultados de financiacion
function actualizarResultadosFinanciacion (){
    
    contenedorResultadoFinanciacion.innerHTML = "";
    
    mostrarTituloResultadoFinanciacion()

    for (const smartphone of arrayDeProductosAgregados) {

        const contenedorDatosSmartphone = document.createElement("div");
        contenedorDatosSmartphone.className = ".contenedorDatosSmartphone"
        contenedorDatosSmartphone.innerHTML = `

            <div class"datosSmartphone">
                <div class="datoEncabezado">
                    <p class="datoModelo"> ${smartphone.modelo}</p>

                    <button id="eliminar-${smartphone.id}"  class="iconoTacho" type="button"><img src="./Multimedia/tacho.svg" alt="icono-tacho"></button>
                </div>

                <div>
                    <p class="datoCantidad">Cantidad: ${smartphone.cantidad}</p>
                    <p class="datoPrecioUnitario">Precio unitario: $${smartphone.precio}</p>
                </div>  
            </div>
            `;

            contenedorResultadoFinanciacion.appendChild(contenedorDatosSmartphone);

            const botonTacho = document.getElementById(`eliminar-${smartphone.id}`);
            botonTacho.addEventListener("click", () => {
                eliminarItems (smartphone.id);
            });
            
            const resultadoFinanciacion = smartphone.precio * smartphone.cantidad / cuotaSeleccionada;

            const detalleFinanciacion = document.createElement("div");
            detalleFinanciacion.innerHTML = `

                <div id="resultadoFinanciacion">
                    <p class="cuotasParaFinanciar"> ${cuotaSeleccionada} cuotas sin interés de $${resultadoFinanciacion}</p>
                    <div class="lineaDivisora"></div>
                </div>`;

            contenedorDatosSmartphone.appendChild(detalleFinanciacion);

    }

}



//En esta funcion actualizamos el numero de items agregados en el icono carrito
function actualizarCantidadCarrito (){
    let cantidad = 0;
                
    for(let i = 0; i < arrayDeProductosAgregados.length; i++){
        cantidad += arrayDeProductosAgregados[i].cantidad;
        
    }
    itemsEnIconoCarrito.innerHTML = cantidad;
}



//En esta funcion eliminamos items o productos completos de los resultados de financiacion
function eliminarItems (id){
    arrayDeProductosAgregados.some((producto) => producto.id === id);

    let indice = arrayDeProductosAgregados.findIndex((producto) => producto.id === id);

    if(arrayDeProductosAgregados[indice].cantidad > 1){
        arrayDeProductosAgregados[indice].cantidad--;

    }else{
        arrayDeProductosAgregados.splice(indice, 1);
    }
    actualizarCantidadCarrito()
    actualizarResultadosFinanciacion ()

    localStorage.setItem("productosAgregados", JSON.stringify(arrayDeProductosAgregados));
}



//En esta funcion mostramos los productos apple por default al principio
function mostrarApplePorDefecto(){
    document.querySelector("#botonMarcaApple");
    let productosApple = smartphone.filter(producto => producto.marca === "Apple");

    mostrarProductosApple = crearProductos(productosApple);
    mostrarContenido("#paso2");
};



//En esta funcion mostramos el titulo del bloque de resultados despues de que el usuario hace click en las cuotas
function mostrarTituloResultadoFinanciacion(){
    
    const tituloResultado = document.createElement("div");
    tituloResultado.innerHTML =`

    <div id="contenedorTituloResultado">
        <img src="./Multimedia/tarjeta.svg" alt="icono-tarjeta" class="iconoTarjeta">
        <h2 id="titulo">Te mostramos la financiación con ${tarjetaSeleccionada}</h2>
    <div>
    `;
    contenedorResultadoFinanciacion.appendChild(tituloResultado);
}
