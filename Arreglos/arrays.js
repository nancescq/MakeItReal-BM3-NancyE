let array = [1, "Nancy", 10, true, "Jeanneth", false, 23];

// Posición
let pos = array[4];

console.log ( "Esta es mi posición 4: " + pos );

console.log ( "Array: " + array );

// Recorrer un arreglo

for ( let i=0; i < array.length; i++ ) {
    console.log ( "Este es mi dato " + i + ": " + array[i]);
}

// Cambiar el dato de una posición de un arreglo

array [3] = "Hola";

console.log ( array[3]);
console.log ( "Array: ** " + array );


