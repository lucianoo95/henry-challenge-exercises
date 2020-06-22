// Ejercicio 1
// Escribir un algoritmo que imprima los numeros del 1 al 100, 
// con la condicion que si el numero a imprimir es multiplo de 3, 
// imprima el string 'Fizz', si el numero es multiplo de 5 imprima: 'Buzz', 
// y si es multiplo de ambos imprima: 'FizzBuzz'
// ejemplo de output: // 1 // 2 // Fizz // 4 // Buzz // Fizz // ... // 14 // FizzBuzz // 16

const findMultiples = number => {
  let response;

  // Primero comparar si cumple ambas condiciones ya que de lo contrario si es multiple de 5 y 3 nunca se cumpliria.
  if (number % 3 === 0 & number % 5 === 0) {
    response = 'FizzBuzz';
  } else if (number % 3 === 0) {
    response = 'Fizz';
  } else if (number % 5 === 0) {
    response = 'Buzz';
  } else {
    response = number;
  }

  return response;
}

// Recorrer numeros del 1 al 100.
for (let i = 1; i <= 100; i++) {

  findMultiples(i);

}
