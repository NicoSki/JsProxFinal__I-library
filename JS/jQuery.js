//voy a usar jQuery para asignar algunos estilos:
//en este caso le voy a dar una funcion para que aparezca y desaparezca al clickearlo:


//le doy funcion al boton
$("#pedido").on("click", () => {
    $("#tabla").toggle(2000)
})

$("#pedido1").on("click", () => {
    $("#tabla1").toggle(2000)
})


/*===============================
          AJAX/API
================================*/
//ahora voy a empezar a usar las utilidades de la api gratis del pdf(voy a usar la propiedad fetch):

//1ero creo las variables:

const contacto = document.querySelector("#contacto");
const url = `https://jsonplaceholder.typicode.com/users`;
const ayudante = document.querySelector("#nombre")
const maill = document.querySelector("#mail")

//utilizo fetch con la url:

fetch(url)

    //2do le doy la propiedad de json para que me lo transforme a un array
    .then(response => response.json())

    /*esto es figurativo para saber si esta funcionando correctamente 
    
    .then(info => console.log(info))
    
    */

    //3ro voy a agregar un catch en caso de que haya alguna alteracion(error):
    .catch(error => console.log(error))

//4to ahora la intencion es que en caso de tener un error en la compra, los usuarios se puedan comunicar con las personas que nos trae la api:

    .then(info => {

        info.forEach(nombre => {
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.appendChild(li)
            li.innerHTML = nombre.name
            ayudante.appendChild(ul)

        })

        info.forEach(mail => {
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            ul.appendChild(li)
            li.innerHTML = mail.email
            maill.appendChild(ul)
        })
    })

    //por ultimo, les asigno algunos id y les doy estilos


/*===============================
          DARKMODE
================================*/

$("#swtch").on("click", () => {
    if (localStorage.getItem("theme") == "dark") {
        lightmode()
    } else {
        darkmode()
    }
    
});


const darkmode = () => {
   $("main").css("background-color", "rgb(10,10,10)")
   $("footer").css("background-color", "rgb(10,10,10)")
   
    //lo subo al localstorage:

    localStorage.setItem("theme", "dark")
}

//3ero creo los estilos del lightmode:

const lightmode = () => {
    $("main").css("background-color", "rgb(197, 197, 206)")
   $("footer").css("background-color", "white")

    //lo subo al localstorage:

    localStorage.setItem("theme", "light")
}
