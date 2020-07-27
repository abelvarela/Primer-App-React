
const nombre = "Abel";
const apellido = "Varela";

//const nombreCompleto = nombre + " " + apellido;
//const nombreCompleto = ` ${nombre} ${apellido} `;
const nombreCompleto = ` 
${nombre} 
${apellido} 
${1+1}
`;


// console.log( nombreCompleto );


export function getSaludo(nombre = "Juan") {
    return "Hola " + nombre + "!";
}

// console.log( `Este es un texto: ${getSaludo(nombre)}` );


