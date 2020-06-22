// Ejercicio 2
// Escribir un algoritmo que encuentre el máximo y
//  el minímo número dentro de una lista de números enteros (desordenados).
// Output: [1, 3, 0, -1, 12, 3] Output: min: -1 max: 12. 

const messyNumbers = [100, 3, 47, -11, -90, 22, 14];

let max = messyNumbers[0],
  min = messyNumbers[0];

const getNumberMaxAndMin = () => {
  // Recorrer numeros desordenados
  messyNumbers.forEach(number => {

    if (number > max) {
      // Si es mayor que el anterior lo reemplaza
      max = number;
    } else if (number < min) {
      // Si es menor que el anterior lo reemplaza
      min = number;
    }

  });

  console.log(`Min: ${min}. \nMax: ${max}.`);
}