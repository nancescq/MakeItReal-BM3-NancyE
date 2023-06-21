// Formula de IMC es peso / (alt ^ 2)

function imc (peso, alt) {
    return peso / (alt ** 2);
}

let peso = 67;
let alt = 1.68;
let imcCalculo = imc (peso, alt);

console.log ( "IMC es " + imcCalculo);