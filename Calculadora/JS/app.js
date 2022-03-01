function Sumar(){
    const formulario = document.getElementById("formulario");
    let opA = formulario['operandoA'];
    let opB = formulario['operandoB'];
    let resultado = parseInt(opA.value) + parseInt(opB.value);
    if(isNaN(resultado))
    resultado = 'La Operacion No Incluye Numeros';
    
    document.getElementById("resultado").innerHTML = `Resultado: ${resultado}`; 
    
    
}