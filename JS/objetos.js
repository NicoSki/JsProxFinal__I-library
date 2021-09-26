//aca voy a crear los arrays con los detalles de los articulos:

const cuadernos = [

    //CUADERNOS
    //RIVADAVIA
    {
        id: 1,
        marca: "RIVADAVIA",
        color: "ROJO",
        imagenurl: `../imagenes/riv1.jpg`,
        precio: 200
    },

    {
        id: 2,
        marca: "RIVADAVIA",
        color: "AZUL",
        imagenurl: `../imagenes/riv2.jpg`,
        precio: 200
    },

    {
        id: 3,
        marca: "RIVADAVIA",
        color: "AMARILLO",
        imagenurl: `../imagenes/riv3.jpg`,
        precio: 200
    },

    //EXITO

    {
        id: 4,
        marca: "EXITO",
        color: "VERDE",
        imagenurl: `../imagenes/exi1.jpg`,
        precio: 200
    },
    {
        id: 5,
        marca: "EXITO",
        color: "NARANJA",
        imagenurl: `../imagenes/exi2.jpg`,
        precio: 200
    },
    {
        id: 6,
        marca: "EXITO",
        color: "CELESTE",
        imagenurl: `../imagenes/exi3.jpg`,
        precio: 200
    },

    //GLORIA

    {
        id: 7,
        marca: "GLORIA",
        color: "MORADO",
        imagenurl: `../imagenes/glo1.jpg`,
        precio: 150
    },
    {
        id: 8,
        marca: "GLORIA",
        color: "ROJO",
        imagenurl: `../imagenes/glo2.jpg`,
        precio: 150
    },
    {
        id: 9,
        marca: "GLORIA",
        color: "NARANJA",
        imagenurl: `../imagenes/glo3.jpg`,
        precio: 150
    },

    //TRIUNFANTE
    {
        id: 10,
        marca: "TRIUNFANTE",
        color: "MORADO",
        imagenurl: `../imagenes/triu1.jpg`,
        precio: 150
    },
    {
        id: 11,
        marca: "TRIUNFANTE",
        color: "CELESTE",
        imagenurl: `../imagenes/triu2.jpg`,
        precio: 150
    },
    {
        id: 12,
        marca: "TRIUNFANTE",
        color: "AZUL",
        imagenurl: `../imagenes/triu3.jpg`,
        precio: 150
    },

    //CUADERNILLOS

    {
        id: 13,
        marca: "AVON",
        color: "ROJO",
        imagenurl: `../imagenes/avon1.jfif`,
        precio: 300
    },

    {
        id: 14,
        marca: "AVON",
        color: "AGUA",
        imagenurl: `../imagenes/avon2.jfif`,
        precio: 300
    },
    {
        id: 15,
        marca: "AVON",
        color: "VIOLETA",
        imagenurl: `../imagenes/avon3.jpg`,
        precio: 300
    },

];

//ahora lo subo al localstorage:

let ObjtoJson = JSON.stringify(cuadernos);
localStorage.setItem("Cuadernos", ObjtoJson)


/*========================
    LAPICES Y LAPICERAS
=========================*/

const lapices = [
    {
        id: 16,
        marca: "BIC",
        color: "AZUL",
        imagenurl: `../imagenes/bic1.jpg`,
        trazo: "GRUESO",
        precio: 50
    },
    {
        id: 17,
        marca: "BIC",
        color: "AZUL",
        imagenurl: `../imagenes/bic2.jpg`,
        trazo: "FINO",
        precio: 50
    },
    {
        id: 18,
        marca: "BIC",
        color: "AZUL",
        imagenurl: `../imagenes/bic3.jpg`,
        trazo: "GRUESO",
        precio: 100
    },

    //LAPICES:

    {
        id: 19,
        marca: "FABER-CASTELL",
        color: "NEGRO",
        imagenurl: `../imagenes/castell1.jpg`,
        trazo: "GRUESO",
        precio: 40
    },
    {
        id: 20,
        marca: "FABER-CASTELL",
        color: "NEGRO",
        imagenurl: `../imagenes/castell2.jpg`,
        trazo: "GRUESO",
        precio: 40
    },
    {
        id: 21,
        marca: "FABER-CASTELL",
        color: "NEGRO",
        imagenurl: `../imagenes/castell3.jpg`,
        trazo: "GRUESO",
        precio: 40
    }
];

//por ultimo lo subo al localstorage:

let ObjtoJson1 = JSON.stringify(lapices);
localStorage.setItem("lapices", ObjtoJson1)