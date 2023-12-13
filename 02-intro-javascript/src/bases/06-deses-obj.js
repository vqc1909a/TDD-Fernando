// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman"
};

// const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const retornaPersona = ({nombre: nombre2, edad: edad2, rango = 'Cap'}) => {
    // console.log(nombre, edad, rango)

    return {
        nombreClave: nombre2,
        anios: edad2,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}
const { nombreClave, anios, latlng: { lat, lng, prueba = "valor_prueba" } } = retornaPersona(persona);
console.log({nombreClave, anios, lat, lng, prueba})