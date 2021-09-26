
//comienzo con las variables que voy a utilizar:
const card = document.getElementById("card");
const items = document.getElementById("items");
const footerDeTabla = document.getElementById("footer");
const templateCard = document.getElementById("template-card").content;
const templateFooter = document.getElementById("template-footer").content;
const templateCarrito = document.getElementById("template-carrito").content;
const fragment = document.createDocumentFragment();
let carrito = {};
//ahora voy a crear una funcion para que me haga las cartas de los cuadernos y cuadernillos dinamica:

function cartaDinamica() {
    cuadernos.forEach(producto => {

        templateCard.querySelector("h4").textContent = producto.marca
        templateCard.querySelector("img").setAttribute("src", producto.imagenurl)
        templateCard.querySelector("h6").textContent = producto.precio
        templateCard.querySelector(".btn-dark").dataset.id = producto.id


        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)

    })
    card.appendChild(fragment)
}
cartaDinamica()
//console.log(cuadernos);

//lo que acabo de hacer son las cartas dinamicas de los cuadernos acompañados de un id correspondiente al numero del cuaderno

//ahora paso a la parte de los card, donde voy a capturar los elementos:

card.addEventListener("click", e => {
    agregarAlCarrito(e)
})

items.addEventListener("click", e => {
    btnSuma(e)
})

//creo la constante de agregarcarrito, para poder capturar la parte del boton(creo un booleano):
const agregarAlCarrito = e => {
    //console.log(e.target.classList.contains("btn-dark"));
    if (e.target.classList.contains("btn-dark")) {

        objetoDelArticulo(e.target.parentElement)
    }

    //agrego este apartado en caso de que se active otro evento:
    e.stopPropagation()
}

//ahora voy a crear una variable que almacene el contenido, pero dentro de un objeto:


const objetoDelArticulo = objeto => {
    //console.log(objeto);
    //1er seccion
    const articulo = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        marca: objeto.querySelector("h4").textContent,
        hojas: objeto.querySelector("#hs").value,
        tipo: objeto.querySelector("#tip").value,
        precio: objeto.querySelector("h6").textContent,
        cantidad: 1
    }

    //2da seccion
    if (carrito.hasOwnProperty(articulo.id)) {
        articulo.cantidad = carrito[articulo.id].cantidad + 1
    }

    carrito[articulo.id] = { ...articulo }

    insertoAlCarro()

    //console.log(carrito);
}


//entonces, en la primer seccion de objetodelarticulo, lo que hice fue seleccionar todas las etiquetas que quiero que esten en mi futura tabla(la del carrito de compra) a la hora de hacerles click
//luego, en la segunda seccion, lo que hice fue determinar la cantidad de articulos(en caso de que se haga mas de un click en el mismo boton)
//ahora me voy al html a crear la tabla que va a pertenecer al carrito

//ahora voy a crear la variable/funcion que me lleve todo al carrito:

const insertoAlCarro = () => {

    items.innerHTML = ``
    Object.values(carrito).forEach(articulo => {
        templateCarrito.querySelector("th").textContent = "CUADERNO"
        templateCarrito.querySelectorAll("td")[0].textContent = articulo.marca
        templateCarrito.querySelectorAll("td")[1].textContent = articulo.hojas
        templateCarrito.querySelectorAll("td")[2].textContent = articulo.tipo
        templateCarrito.querySelectorAll("td")[3].textContent = articulo.cantidad
        templateCarrito.querySelector(".btn-info").dataset.id = articulo.id
        templateCarrito.querySelector(".btn-danger").dataset.id = articulo.id
        templateCarrito.querySelector("span").textContent = articulo.cantidad * articulo.precio

        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)

    accionDeFooter()
}

//lo que hice en la variable insertoalcarro fue asignarles los items a la tabla de mi carrito, em cuanto al innnerHTML fue para que no se repita el contenido al agregar otro articulo

//ahora paso al footer:

const accionDeFooter = () => {
    footerDeTabla.innerHTML = ``
    if (Object.keys(carrito).length === 0) {
        footerDeTabla.innerHTML = `
        <th scope="row" colspan="5">NO AGREGASTE NADA AL CARRITO</th>
        `
        return
    }

    const nCantidades = Object.values(carrito).reduce((acumulador, { cantidad }) => acumulador + cantidad, 0)
    //console.log(nCantidades);
    const nPrecios = Object.values(carrito).reduce((acumulador, { cantidad, precio }) => acumulador + cantidad * precio, 0)
    //console.log(nPrecios);

    templateFooter.querySelectorAll("td")[0].textContent = nCantidades
    templateFooter.querySelector("span").textContent = nPrecios

    const clone = templateFooter.cloneNode(true)
    fragment.append(clone)

    footerDeTabla.appendChild(fragment)

    const vaciar = document.getElementById("vaciar-carrito")
    vaciar.addEventListener("click", () => {
        carrito = {}
        insertoAlCarro()
    })
}
//lo que hice en la funcion acciondefooter fue que al agregar algo al carrito, no solo cambiel el footer de la tabla, sino que tambn se agrega tanto el total de los productos como su valor
//tambien le di la funcion de vaciar el carrito al boton, el return es para que no se me desarme el footer

//ahora le doy funciones a los botones de + y -:

const btnSuma = e => {
    //console.log(e.target); con esto accedo a las propiedades del boton
    if (e.target.classList.contains("btn-info")) {
        // console.log(carrito[e.target.dataset.id]);
        const articulo = carrito[e.target.dataset.id]
        articulo.cantidad++
        carrito[e.target.dataset.id] = { ...articulo }
        insertoAlCarro()

    }

    //RESTA
    if (e.target.classList.contains("btn-danger")) {
        // console.log(carrito[e.target.dataset.id]);
        const articulo = carrito[e.target.dataset.id]
        articulo.cantidad--
        if (articulo.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        insertoAlCarro()
    }
    e.stopPropagation()
}
//entonces lo que hice en esta parte es darle funcion a los botones de suma y resta, tanto para que modifique el total como la cantidad







/*========================
    LAPICES Y LAPICERAS
=========================*/
//ahora voy a repetir el procedimiento anterior pero con los lapices y lapiceras:

const card1 = document.getElementById("card1");
const items1 = document.getElementById("items1");
const footerDeTabla1 = document.getElementById("footer1");
const templateCard1 = document.getElementById("template-card1").content;
const templateFooter1 = document.getElementById("template-footer1").content;
const templateCarrito1 = document.getElementById("template-carrito1").content;
const fragment1 = document.createDocumentFragment();
let carrito1 = {};

//CARTAS:

function cartaDinamica1() {
    lapices.forEach(producto => {

        templateCard1.querySelector("h4").textContent = producto.marca
        templateCard1.querySelector("img").setAttribute("src", producto.imagenurl)
        templateCard1.querySelector("#color").textContent = producto.color
        templateCard1.querySelector("h6").textContent = producto.precio
        templateCard1.querySelector(".btn-dark").dataset.id = producto.id

        const clone = templateCard1.cloneNode(true)
        fragment1.appendChild(clone)

    })
    card1.appendChild(fragment1)
}
cartaDinamica1()



//comienzo a operar con las funciones del carrito
card1.addEventListener("click", e => {
    agregarAlCarrito1(e)
})

items1.addEventListener("click", e => {
    btnSuma1(e)
})

const agregarAlCarrito1 = e => {

    if (e.target.classList.contains("btn-dark")) {

        objetoDelArticulo1(e.target.parentElement)
    }

    e.stopPropagation()
}


const objetoDelArticulo1 = objeto => {
    
 
    const articulo = {
        id: objeto.querySelector(".btn-dark").dataset.id,
        marca: objeto.querySelector("h4").textContent,
        color: objeto.querySelector("#color").textContent,
        precio: objeto.querySelector("h6").textContent,
        cantidad: 1
    }

  
    if (carrito1.hasOwnProperty(articulo.id)) {
        articulo.cantidad = carrito1[articulo.id].cantidad + 1
    }

    carrito1[articulo.id] = { ...articulo }

    insertoAlCarro1()

}

const insertoAlCarro1 = () => {

    items1.innerHTML = ``
    Object.values(carrito1).forEach(arti => {

        templateCarrito1.querySelector("th").textContent = "UTILES"
        templateCarrito1.querySelectorAll("td")[0].textContent = arti.marca
        templateCarrito1.querySelectorAll("td")[1].textContent = arti.color
        templateCarrito1.querySelectorAll("td")[2].textContent = arti.trazo
        templateCarrito1.querySelectorAll("td")[3].textContent = arti.cantidad
        templateCarrito1.querySelector(".btn-primary").dataset.id = arti.id
        templateCarrito1.querySelector(".btn-warning").dataset.id = arti.id
        templateCarrito1.querySelector("span").textContent = arti.cantidad * arti.precio

        const clone1 = templateCarrito1.cloneNode(true)
        fragment1.appendChild(clone1)
    })

    items1.appendChild(fragment1)

    accionDeFooter1()
}


//FOOTER:

const accionDeFooter1 = () => {
    footerDeTabla1.innerHTML = ``
    if (Object.keys(carrito1).length === 0) {
        footerDeTabla1.innerHTML = `
        <th scope="row" colspan="5">NO AGREGASTE NADA AL CARRITO</th>
        `
        return
    }

    const nCantidades1 = Object.values(carrito1).reduce((acumulador, { cantidad }) => acumulador + cantidad, 0)

    const nPrecios1 = Object.values(carrito1).reduce((acumulador, { cantidad, precio }) => acumulador + cantidad * precio, 0)
    

    templateFooter1.querySelectorAll("td")[0].textContent = nCantidades1
    templateFooter1.querySelector("span").textContent = nPrecios1

    const clone = templateFooter1.cloneNode(true)
    fragment1.append(clone)

    footerDeTabla1.appendChild(fragment1)

    const vaciar1 = document.getElementById("vaciar-carrito1")
    vaciar1.addEventListener("click", () => {
        carrito1 = {}
        insertoAlCarro1()
    })
}

//BOTONES DE ACCION

const btnSuma1 = e => {

    if (e.target.classList.contains("btn-primary")) {
    
        const articulo = carrito1[e.target.dataset.id]
        articulo.cantidad++
        carrito1[e.target.dataset.id] = { ...articulo }
        insertoAlCarro1()

    }

    //RESTA
    if (e.target.classList.contains("btn-warning")) {
    
        const articulo = carrito1[e.target.dataset.id]
        articulo.cantidad--
        if (articulo.cantidad === 0) {
            delete carrito1[e.target.dataset.id]
        }
        insertoAlCarro1()
    }
    e.stopPropagation()
}


















