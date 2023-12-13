const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

// const owners = ["DC", "Marvel"];

// First form to export (recommended)
export const owners = ["DC", "Marvel"];
export default heroes;

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


