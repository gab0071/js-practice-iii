/**
 * 
⬇️ Comprobar por palíndromos con funciones incorporadas
Para esta solución, usaremos varios métodos:

1️⃣ El método split() una cadena objeto en un arreglo de cadenas separando la cadena en sub cadenas.
2️⃣ El método reverse()  invierte un arreglo en su lugar. El primer elemento del arreglo se convierte en el último y el último en el primero.
3️⃣ El método join() junta todos los elemento de un arreglo en una cadena.
 */

// Escribe tu código aquí

let palabras = ['programación', 'reconocer', 'radar', 'codealo', 'seres', 'amar'];
let resultado = obtenerResultado(palabras);

// Crea una función llamada esPalindromo, que recibe un parámetro de tipo String y retorna si es palíndromo o no (valor booleano).

function esPalindromo(string) {
    let reverso = string.split('').reverse().join('');
    return string === reverso;
}

//Además, crear otra función llamada obtenerResultado, que recibe un listado de palabras y devuelve otro array de booleanos indicando si cada palabra es palindromo o no (utilizar la función esPalindromo para esto).

function obtenerResultado(array) {
    let nuevoArray = [];
    for (let i = 0; i < array.length; i++) {
        let item = esPalindromo(array[i]);
        nuevoArray.push(item);
    }
    return nuevoArray;
}

console.log(`Resultado => [${resultado}]`);
