import heroes, {/* owners */} from "../data/heroes";

//For import of the ease way the variable heroes, simply you write the variable heroes and automatically the url that points to this variable will be imported in the top
//If don't show you the url for import, simply close and open the file that contain the variable to import


export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

// console.log(getHeroeById(2))

export const getHeroesByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);
// console.log(getHeroesByOwner("DC"));


// This code is the file 02-intro-javascript/src/data/heroes.js

// First form to export (recommended)
// export const owners = ["DC", "Marvel"];
// export default heroes;

// First form to import
// import heroes, { owners } from "./data/heroes";

// Second form to export
// export {
//     owners,
//     heroes
// }

// Second form to import
// import { heroes, owners } from "./data/heroes";

//Third form to export
// export {
//     owners,
//     heroes as default
// }

//Third form to import
// import heroes, {owners} from "./data/heroes";


