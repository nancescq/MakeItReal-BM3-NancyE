// 

let arr = ["Primero", "Segundo", "Tercero", "Cuarto", "Soy el ultimo elemento"];
let newArray = ["Quinto", "Sexto"];

console.log ( "Array 1: ", arr );
console.log ( "Array 2: ", newArray );

// insertar datos en los arreglos

arr.splice (4, 0, newArray[0]);
arr.splice (5, 0, newArray[1]);

for ( let i=0 ; i < arr.length; i++ ) {
    console.log ( arr[i] );
}