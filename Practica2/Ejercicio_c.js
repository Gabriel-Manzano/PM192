const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

// Tú código aquí

const luis = personas.find(persona => persona.nombre == "Luis");

console.log(luis);

personas.forEach(persona => {
    console.log(persona.nombre+ " " + persona.edad + " años");
});

const total = personas.reduce((suma, persona) => {
    return suma + (persona.edad);
}, 0);

console.log("La suma de todas las edades es: " + total);