// Escribir un algoritmo que, dada una lista de números ordenados un número N,
//  te devuelva VERDADERO si alguna combinación de dos números cualesquiera
//  suman N, y devuelva FALSO si ninguna combinación de dos números sumados
//  da como resultado el número N.

const numbers = [1, 5, 8, 10, 12];
let result;

const checkSumsCombinations = (number) => {

  // Recorrer el array desde el inicio
  for (let i = 0; i < numbers.length; i++) {
    // Luego recorrer el array desde el siguiente valor de 'i' para realizar las sumas.
    for (let j = i + 1; j < numbers.length; j++) {

      resultAdd = numbers[i] + numbers[j];

      // Si la suma es igual al numero ingresado retorna 'true' y termina la ejecucion.
      if (resultAdd === number) {
        return console.log(true);
      } else {
        result = false;
      }

    }
  }
  // Si el resultado es falso, retornar una sola vez 'false'.
  return console.log(result);
}

checkSumsCombinations(13);
