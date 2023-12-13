const activo = "";
const activo2 = "";

// const mensaje = activo ? 'Activo': 'Inactivo',
// const mensaje = activo ? 'Activo': null;

// if variable activo exists, return 'Activo', else return its default value, what null, undefined, false, "", etc 
const mensaje = activo && 'Activo'
console.log(mensaje);

// if variable activo2 exists, return value activo, else return 'Value by default' in this case
const mensaje2 = activo2 || 'Value by default';
console.log(mensaje2)