
//Desestructuración 
//Asignación Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

// const { nombre:nombre2 } = persona;
// console.log( nombre2 );


//const { nombre, edad, clave } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );




// const retornaPersona = ( usuario ) => {

//     const { nombre, edad, clave } = usuario;

//     console.log(nombre, edad, clave);

// }


//Esta función se llamaba retornaPersona pero fue renombrada a useContext
const useContext = ( { clave, nombre, edad, rango = "Capitán" } ) => {
    
    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2312,
            lng: -23.123
        }
    }

}

// const avenger = useContext( persona );
// const { nombreClave, anios, latlng:{lat, lng} } = useContext( persona ); no es tan común

const { nombreClave, anios, latlng } = useContext( persona );
const {lat, lng} = latlng;

console.log(nombreClave, anios);
console.log( lat, lng );