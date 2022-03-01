class Persona{
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad; 
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersona(){
        return this._idPersona;
    }
    set Nombre(nombre){
        this._nombre = nombre;
    }
    get Nombre(){  
        this._nombre;
    }
    set Apellido(apellido){
        this._apellido;
    }
    get Apellido(){
        return this._apellido;
    }
    set Edad(edad){
        this._edad = edad;
    }
    get Edad(){
        return this._edad;
    }
    NombreCompleto(){
        return '-> '+this._idPersona+' '+this._nombre + ' '+this._apellido + ' '+this._edad;
        /*
        return `
              ${this._idPerona}
              ${this._nombre}
              ${this._apellido}
              ${this._edad}
        `
        */
    }
    toString(){
        return this.NombreCompleto();
    }
}
class Empleado extends Persona{
    static contadorEmpleados = 0;
    constructor(nombre, apellido, edad, sueldo){
     super(nombre, apellido, edad);
     this._sueldo = sueldo;
     this._idEmpleado = ++ Empleado.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    set Sueldo(sueldo){
       this._sueldo;
    }
    get Sueldo(){
        return this._sueldo;
    }
    DatosCompletosEmpleado(){
        return this._idEmpleado +' '+super.toString() + ' ' + this._sueldo;
    }
    toString(){
        return this.DatosCompletosEmpleado();
    }
}
class Cliente extends Persona{
    static contadorClientes = 0;
    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date(fechaRegistro);
        this._idCliente = ++Cliente.contadorClientes;
       }
       get idCliente(){
           return this._idCliente;
       }
       set FechaRegistro(fechaRegistro){
        this._fechaRegistro = new Date(fechaRegistro);
       }
       get FechaRegistro(){
           return this._fechaRegistro;
       }
       DatosCompletosCliente(){
           return this._idCliente +' '+super.toString() + ' ' + this._fechaRegistro;
       }
       toString(){
           return this.DatosCompletosCliente();
       }
}

//Prubass Clase Persona
 let personaUno = new Persona('Brandon', 'Ramírez', 22);
 console.log(personaUno.toString());
let personaDos = new Persona('Carlos', 'Perez', '23');
console.log(personaDos.toString());
//Prubass Clase Empleado
let empleadoUno = new Empleado('Fernando', 'Gomez', '54', 5000);
console.log(empleadoUno.toString());
let empleadoDos = new Empleado('Andres', 'Gonzales', '32', 1222);
console.log(empleadoDos.toString());
//Prubass Clase Cliente
let clienteDos = new Cliente('Alejandro', 'Guacho', '32', new Date());
console.log(clienteDos.toString());
