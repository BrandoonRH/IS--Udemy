let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    idioma: 'español',
    get lang(){
    return this.idioma.toUpperCase;
    },
    set lang(lang){
     this.idioma = lang.toUpperCase;
    },
    //Se agrega la palabra GET para Entrar a la funcioón y Obtener sus valores 
    //Se retira la paralabra function 
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
//Para entrera a la funcion ya no es necesario escribir los parentesis
console.log( persona.nombreCompleto );