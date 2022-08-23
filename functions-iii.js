//Crea un programa que dado un string, devuelva un array de strings con cada palabra del string original, pero con el orden invertido. Para ello deberás completar el código dentro de cada función.

// Ejemplo: convierte "hoy es un buen día" en ["día", "buen", "un", "es", "hoy"]

function separar(frase) {  
    return frase.split(" ");
  }
  function invertir(elementos) {
    return elementos.reverse();
  }
  
  let palabras = separar('Estoy aprendiendo a programar en Codealo')
  let palabrasInvertidas = invertir(palabras)
  
  console.log(`Palabras invertidas => [${palabrasInvertidas}]`)