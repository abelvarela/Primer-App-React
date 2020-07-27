// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";
// import { heroes } from './data/heroes'  snipet   imp + tab




//find()
export const getHeroeById = (id) => heroes.find( ( heroe ) => heroe.id === id);




//filter()
export const getHeroeByOwner = ( owner ) => heroes.filter( ( heroe ) => heroe.owner === owner);
