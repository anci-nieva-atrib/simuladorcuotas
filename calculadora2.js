//Logo
//Titulo de bienvenida y contexto
//Stepper, vamos guardando en local storage cada cosa que elige el usuario
//1: Elegi una marca
//Mostrarle al usuario 3 cards/botones con los logos y una opcion que diga "Quiero ver todos los smartphones"
//2. Elegi el modelo (puede ser mas de uno): Se le muestran al usuario las cards de los smartphones con los precios
//Se almacena el local storage cada item agregado por el usuario
//El boton de consultar financiacion cambia a producto seleccionado
//3. Con que tarjeta vas a pagar?
//Mostrarle al usuario iconos de visa, mastercard y uno que diga "Quiero consultar con ambas"
//El usuario selecciona la tarjeta y le imprimimos las cuotas disponibles para que seleccione con lista desplegable o checkbox
//Guardamos su seleccion
//Le imprimimos desde local storage el nombre del producto, el precio, la tarjeta, las cuotas y la financiacion
//El usuario deberia poder editar todo. Eliminar telefonos agregados, cambiar de tarjeta o cuotas, cambiar de telefono
//Tengo que guardar tambien el precio total



// Versión con uso de Storage
class Alfajor {
    constructor(alfajor) {
        this.id = alfajor.id;
        this.marca = alfajor.marca;
        this.precio = alfajor.precio;
        this.cantidad = alfajor.cantidad;
        this.precioTotal = alfajor.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

// ************** DECLARACIÓN DE FUNCIONES ************** //

function imprimirProductosEnHTML(array) {
    // Obtenemos el div que contendrá nuestras cards
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    // Recorremos el array y por cada item imprimimos una card
    for (const alfajor of array) {
        // Creamos el contendor individual para cada card
        let card = document.createElement("div");
        // <div>
        //     <img>
        //     <h1>
        //</div>

        // Agregamos el contenido a la card
        // Observar cómo el nombre del id del botón se genera
        // de manera dinámica
        card.innerHTML = `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
                <img src="${alfajor.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title">${alfajor.marca}</h2>
                <h5 class="card-subtitle mb-2 text-muted">${alfajor.descripcion}</h5>
                <p class="card-text">$${alfajor.precio}</p>

                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${alfajor.marca}${alfajor.id}" type="button" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>      
        `;

        // Una vez que tenemos creada la card, la agregamos al contenedor
        // que obtuvimos desde el HTML
        contenedor.appendChild(card);

        // Luego de agregar la card al DOM,
        // asignamos el evento al botón correspondiente, habiendo nombrado su id de manera
        // dinámica
        let boton = document.getElementById(`agregar${alfajor.marca}${alfajor.id}`);
        boton.addEventListener("click", () => agregarAlCarrito(alfajor));
    }
}

function agregarAlCarrito(producto) {
    // Verificamos si ese tipo de alfajor ya se encuentra en el array
    // con el método find()
    // Este método en caso de dar true, nos devuelve el primer elemento del array
    // que cumple con la condición de búsqueda
    let index = carrito.findIndex((elemento) => elemento.id === producto.id);
    console.log({ index });

    if (index != -1) {
        // Si el alfajor se encuentra en el carrito, alfajorEnCarrito devolverá
        // true, por lo cual se ejecutará este bloque de código
        // y se le sumará uno a la cantidad de esa marca en el carrito

        // Una vez que obtenemos el index donde se halla el elemento ya agregado
        // al carrito, invocamos a los métodos que actualizaran unidades y precio total
        // De unidades repetidas
        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        // El alfajor no se encuentra en el carrito, así que
        // lo pusheamos al array asignándole la clase Alfajor
        // para poder acceder a sus métodos

        // En esta instancia, tenemos que inicializar la propiedad cantidad en 1
        let alfajor = new Alfajor(producto);
        alfajor.cantidad = 1;
        carrito.push(alfajor);
    }

    // Actualizamos el storage y el contenido de la tabla
    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarDelCarrito(id) {
    // Aquí buscamos el índice del producto en el carrito a eliminar
    let index = carrito.findIndex((element) => element.id === id);

    // Primero chequeamos el stock para saber si hay que restarle 1
    // al stock o quitar el elemento del array
    if (carrito[index].cantidad > 1) {
        // Si hay más de una unidad de ese producto, invocamos los métodos correspondientes
        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        // Si queda solo una unidad, se elimina del array
        // Para esto utilizamos el método splice
        // Este método sobreescribe el array original
        // Con alfajor id indicamos el índice del elemento en el array
        // a eliminar. El 1 es la cantidad de elementos a eliminar, como en este caso

        // [3, 2, 1, 5, 4, 2].splice(2, 2)
        carrito.splice(index, 1);
    }

    //swal("Producto eliminado con éxito", "", "success");

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarCarrito() {
    carrito = [];
    localStorage.removeItem("carritoEnStorage");
    // localStorage.clear()
    swal("Compra eliminada con éxito", "", "success");

    document.getElementById("tabla-carrito").innerHTML = "";
    document.getElementById("acciones-carrito").innerHTML = "";
}

function obtenerPrecioTotal(array) {
    return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
}

// Recibe el contenido del carrito y lo imprime en el html
// en una tabla
function imprimirTabla(array) {
    let contenedor = document.getElementById("tabla-carrito");
    contenedor.innerHTML = "";

    // Creamos el div que contendrá la tabla
    let tabla = document.createElement("div");

    // A ese div le agregaremos todos los datos de la tabla
    tabla.innerHTML = `
        <table id="tablaCarrito" class="table table-striped">
            <thead>         
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>

            <tbody id="bodyTabla">

            </tbody>
        </table>
    `;

    contenedor.appendChild(tabla);

    // Una vez que dibujamos la tabla, obtenemos el id del body de la tabla
    // donde imprimiremos los datos del array
    let bodyTabla = document.getElementById("bodyTabla");

    for (let alfajor of array) {
        let datos = document.createElement("tr");
        datos.innerHTML = `
                <td>${alfajor.marca}</td>
                <td>${alfajor.cantidad}</td>
                <td>$${alfajor.precioTotal}</td>
                <td><button id="eliminar${alfajor.id}" class="btn btn-dark">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${alfajor.id}`);
        botonEliminar.addEventListener("click", () => eliminarDelCarrito(alfajor.id));
    }

    let precioTotal = obtenerPrecioTotal(array);
    let accionesCarrito = document.getElementById("acciones-carrito");
    accionesCarrito.innerHTML = `
		<h5>PrecioTotal: $${precioTotal}</h5></br>
		<button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
	`;
}

function filtrarBusqueda(e) {
    e.preventDefault();

    // Tomo el value del input y le agrego toLowerCase para que la búsqueda no sea
    // case sensitive
    let ingreso = document.getElementById("busqueda").value.toLowerCase();
    let arrayFiltrado = alfajores.filter((elemento) => elemento.marca.toLowerCase().includes(ingreso));

    imprimirProductosEnHTML(arrayFiltrado);
}

function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));

    // Si existe la key buscada en el storage nos traemos
    // los datos para recuperarlos y poder visualizarlos en pantalla
    if (contenidoEnStorage) {
        // Al traer los datos del storage perdemos las instancias de clase
        // Para recuperarlas genero una copia del array con la info del storage
        // instanciando la clase en cada objeto del array
        let array = [];

        for (const objeto of contenidoEnStorage) {
            // Recibo los datos del objeto del storage
            // los guardo en la variable alfajor con la instancia de clase
            // let alfajor = new Alfajor(objeto, objeto.cantidad);
            let alfajor = new Alfajor(objeto);
            alfajor.actualizarPrecioTotal();
            // Envio ese objeto instanciado al arrray
            array.push(alfajor);
        }

        imprimirTabla(array);

        // Una vez que terminamos, la función retorna ese nuevo array con los datos recuperados
        return array;
    }

    // Si no existe ese array en el LS, esta función devolverá un array vacío
    return [];
}

// ************** EVENTO **************
let btnFiltrar = document.getElementById("btnFiltrar");
btnFiltrar.addEventListener("click", filtrarBusqueda);

// ************** CONSTANTES Y VARIABLES **************
const alfajores = [
    {
        id: 0,
        marca: "Aguila",
        descripcion: "Alfajor minitorta clasica",
        precio: 100,
        img: "./Multimedia/alfajores/aguilaclasica.jpg",
    },
    {
        id: 1,
        marca: "Milka",
        descripcion: "Alfajor con mouse de chocolate",
        precio: 90,
        img: "./Multimedia/alfajores/milka mouse.jpg",
    },
    {
        id: 2,
        marca: "Block",
        descripcion: "Alfajor con chocolate con mani",
        precio: 95,
        img: "./Multimedia/alfajores/coflerblock.jpg",
    },
    {
        id: 3,
        marca: "Bon o Bon",
        descripcion: "Alfajor con pasta de mani",
        precio: 85,
        img: "./Multimedia/alfajores/bonobon.jpg",
    },
    {
        id: 4,
        marca: "Pepitos",
        descripcion: "Alfajor con chips de chocolate",
        precio: 90,
        img: "./Multimedia/alfajores/pepitos.jpg",
    },
    {
        id: 5,
        marca: "Guaymallen",
        descripcion: "Alfajor de chocolate",
        precio: 85,
        img: "./Multimedia/alfajores/guaymallenchocolate.jpg",
    },
];

// Ejecución del código
// --- Invocación de funciones ---
imprimirProductosEnHTML(alfajores);

// Consulta al Storage para saber si hay información almacenada
// Si hay datos, se imprimen en el HTML al refrescar la página
let carrito = chequearCarritoEnStorage();