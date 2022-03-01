const personasArray = [
    new Persona('Brandon', 'Ramirez'),
    new Persona('Eduardo', 'Hernandez')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let textoPersonas = '';
    for(let persona of personasArray){
        console.log(persona);
        textoPersonas += `<li>${persona.Nombre} ${persona.Apellido}</li>`;
    }
    document.getElementById('personasUl').innerHTML = textoPersonas;
}

function agregarPersona(){
    const formulario = document.forms['formu'];
    const name = formulario['nombre']; 
    const lastname =formulario['apellido'];

    if(name.vaue != '' && lastname.value != ''){
        const personaAgregada = new Persona(name.value, lastname.value); 
        personasArray.push(personaAgregada); 
        mostrarPersonas();
       formulario.reset();
    }else{
        alert ('Ingrese Datos'); 
    }
     

}