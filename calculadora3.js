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


const itemsEnIconoCarrito = document.querySelector("#cantidadItemsCarrito");


//Aqui estan las acciones asignadas a cada boton que filtra por marca
const mostrarProductosApple = document.querySelector("#botonMarcaApple");
mostrarProductosApple.addEventListener("click", () => {
    const productosApple = smartphone.filter(producto => producto.marca === "Apple");
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
const arrayDeProductosAgregados = JSON.parse(localStorage.getItem("productoAgregado")) || [];

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
                    const indice = arrayDeProductosAgregados.findIndex((producto) => producto.id === smartphone.id);
                    arrayDeProductosAgregados[indice].cantidad++;
                }else{
                    smartphone.cantidad = 1;
                    arrayDeProductosAgregados.push(smartphone);
                }

                localStorage.setItem("productosAgregados", JSON.stringify(arrayDeProductosAgregados));

                mostrarContenido("#seleccionarTarjeta");
            });
    });

};


//Funciones mostrar y ocultar contenido del HTML
function mostrarContenido(id){
    document.querySelector(id).className = "";
}

function ocultarContenido(id){
    document.querySelector(id).className = "oculto";
}



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
        tipo:"VISA",

        cuotas: "Todas las ",
    },
    { 
        id:5,
        tipo:"MASTERCARD",
        cuotas: 1,
    },
    { 
        id:6,
        tipo:"MASTERCARD",
        cuotas: 12,
    },
    { 
        id:7,
        tipo:"MASTERCARD",
        cuotas: "Todas las ",
    },
];




//Aqui estan las acciones asignadas a cada boton que filtra por marca
let mostrarCuotasVisa = document.querySelector("#botonVisa");
mostrarCuotasVisa.addEventListener("click", () => {
    const cuotasParaVisa = cuotas.filter(producto => producto.tipo === "VISA");
    crearBotonesCuotas(cuotasParaVisa);
    mostrarContenido("#paso4");

});


let mostrarCuotasMastercard = document.querySelector("#botonMastercard");
mostrarCuotasMastercard.addEventListener("click", () => {
    const cuotasParaMastercard = cuotas.filter(producto => producto.tipo === "MASTERCARD");
    crearBotonesCuotas(cuotasParaMastercard);
    mostrarContenido("#paso4");
});


//Aqui esta la funcion para la seleccion de cuotas
const contenedorOpcionesCuotas = document.querySelector("#seleccionarCuotas");
const contenedorResultadoFinanciacion = document.querySelector("#resultadoFinanciacion");
const arrayDeCuotasSeleccionadas = [];

function crearBotonesCuotas(cuotas){
    contenedorOpcionesCuotas.innerHTML = "";
    
    cuotas.forEach((cuotas) => {
    
        const cadaRadioBoton = document.createElement("div");
        cadaRadioBoton.className = "cadaRadioBoton";
        
        cadaRadioBoton.innerHTML = `
        <input class="radioInput" type="radio" name="inlineRadioOptions" id="inlineRadio${cuotas.id}" value=${cuotas.cuotas}>
        <label class="radioLabel" for="inlineRadio${cuotas.id}">${cuotas.cuotas} cuotas sin interés con ${cuotas.tipo}</label>`;

        contenedorOpcionesCuotas.appendChild(cadaRadioBoton);

        cadaRadioBoton.addEventListener("click", () => {
    
            const cuotaElegida = document.querySelector('input[name="inlineRadioOptions"]:checked').value;

            for (const smartphone of arrayDeProductosAgregados) {
                
                const contenedorDatosSmartphone = document.createElement("div");
                contenedorDatosSmartphone.innerHTML = `
                            <div class"datosSmartphone">
                                <p class="datoModelo"> ${smartphone.modelo}</p>
                                <p class="datoCantidad">Cantidad: ${smartphone.cantidad}</p>
                                <p class="datoPrecioUnitario">Precio unitario: $${smartphone.precio}</p>
                            </div>`;
            
                contenedorResultadoFinanciacion.appendChild(contenedorDatosSmartphone);
            }
            mostrarContenido("#resultadoFinanciacion");
            const resultadoFinanciacion = (smartphone.precio / cuotaElegida);
            console.log(resultadoFinanciacion);
        
        });


    });

};