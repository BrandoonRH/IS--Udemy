let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de call para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic.', '44332288') );

console.log( persona1.nombreCompleto.call( persona2, 'Ing', '5544332211' ) );

//Uso de apply para usar 
//el metodo persona1.nombreCompleto con los datos del persona2
console.log( persona1.nombreCompleto('Lic', '66887711') );

let arreglo = ['Ing','55443322'];
console.log( persona1.nombreCompleto.apply( persona2, arreglo) );