

// const getImagenPromesa = () => new Promise ( resolve => resolve( "https://asdadasd.com" ) )

// getImagenPromesa().then( console.log )



//Hacemos lo mismo que antes utilizando async
// const getImagen = async() => {

//     return "https://asdadasd.com"

// }


// getImagen().then( console.log );




//Ahora vamos a hacer lo mismo que el ejercicio anterior 10-fetch pero usando await (await siempre va dentro de un bloque async)

export const getImagen = async() => {
    
    try {
        
        const apiKey = "wW1s4TVFtboG9bubbbUKSVKOS3KuKzwV" ;
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const { url } = data.images.original;
        
        return url;

    } catch (error) {
        return "No existe";
    }

}

getImagen();












// const apiKey = "wW1s4TVFtboG9bubbbUKSVKOS3KuKzwV" ;

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// // peticion.then( resp => {
// //     // console.log(resp)
// //     resp.json().then( data => {
// //         console.log(data)
// //     })
// // })
// // .catch( console.warn )


// //aqui hacemos promesas encadenadas

// peticion
//     .then( resp => resp.json() )
//     .then( ({ data }) => {
//         // console.log( data.images.original.url )
//         //Ahora almaceno la url de arriba en una variable
//         //Para practicar lo hacemos con desestructuracion
//         const { url } = data.images.original;

//         const img = document.createElement("img");
//         img.src = url ;


//         document.body.append( img );
//     })
//     .catch( console.warn )