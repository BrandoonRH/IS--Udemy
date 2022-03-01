class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    
    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`;
}
}

function imprimir(tipo){
    console.log( tipo.obtenerDetalles());
    /*
    Si queremos preguntar de que tipo es el objeto lo ideal es mejor poner 
    la clase de menor jerarquia
    Dejamos al Inicio la Clase de menor jerarquia*/
   if(tipo instanceof Gerente){
     console.log("Tipo Gerente");
   }else if(tipo instanceof Empleado){
       console.log("Es de Tipo Empleado");
   }else if(tipo instanceof Object){
       console.log("Es de Tipo Object");
   }
}

let empleado1 = new Empleado('Juan', 3000);
let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');

imprimir( empleado1 );
imprimir( gerente1 );