const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
}

//For show value object in the console web navigator more easy
console.log({
    persona
});

//we are creating a new object with the same values of the object persona but changing the name, so we can see that it changed the property value in both objects so as persona and persona2
// const persona2 = persona;

//To avoid this mutation, simply yo wrap the object in curly braces in this case
const persona2 = {...persona};

persona2.nombre = "Petter"
console.log({
    persona2
})