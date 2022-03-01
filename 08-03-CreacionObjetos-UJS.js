let x = 10;
console.log(x.length);

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona['nombre']);
console.log(persona);
//Agregar Propiedades a un Objeto 
persona.telefono = '33268639';
//Eliminar Propiedad 
delete persona.telefono;

//FORMAS DE IMPRIPIR UN OBJETO 
//Concatenar cada valor de cada propiedad 
console.log(persona.nombre + ' ' + persona.apellido);

//FOR IN 
for( nombresPropiedades in persona){
console.log(nombresPropiedades);
console.log( persona [nombresPropiedades]);
}
//Con arreglo 
let personaValores = Object.values(persona);
console.log(personaValores);

//Convertir Objeto a Cadena 
let personaString = JSON.stringify(persona);
console.log(personaString);

let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.tel = '55443322';

console.log( persona2.tel );