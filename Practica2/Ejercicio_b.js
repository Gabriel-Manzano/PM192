const productos = [
    {nombre: "Laptop", precio: 12000},
    {nombre: "Mouse", precio: 250},
    {nombre: "Teclado", precio: 750},
    {nombre: "Monitor", precio: 3000}
]

// Tú código aquí

const mayor1000 = productos.filter((productos) => productos.precio > 1000);
//console.log(mayor1000);

const nombres = mayor1000.map(productos => productos.nombre);

// Impresión del arreglo

console.log(nombres); // ["Laptop", "Monitor"]