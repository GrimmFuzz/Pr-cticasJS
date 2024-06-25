function invertirCadena(cadena) {
  return cadena.split('').reverse().join('');
}

function esNumeroPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
  }
  return true;
}

function eliminarDuplicados(arreglo) {
  return [...new Set(arreglo)];
}

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) return 1;
  let factorial = 1;
  for (let i = 2; i <= numero; i++) {
      factorial *= i;
  }
  return factorial;
}

function contarVocales(cadena) {
  let vocales = 'aeiouAEIOU';
  let contador = 0;
  for (let letra of cadena) {
      if (vocales.includes(letra)) {
          contador++;
      }
  }
  return contador;
}

function sumarNumeros(arreglo) {
  let suma = 0;
  for (let numero of arreglo) {
      suma += numero;
  }
  return suma;
}

function encontrarMaximo(arreglo) {
  let maximo = -Infinity;
  for (let numero of arreglo) {
      if (numero > maximo) {
          maximo = numero;
      }
  }
  return maximo;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('cadenaInvertida').innerText = invertirCadena('Luis');
  document.getElementById('numeroPrimo1').innerText = esNumeroPrimo(7);
  document.getElementById('numeroPrimo2').innerText = esNumeroPrimo(4);
  document.getElementById('arregloSinDuplicados').innerText = eliminarDuplicados([1, 2, 2, 3, 4, 4, 5]).join(', ');
  document.getElementById('factorial').innerText = calcularFactorial(5);
  document.getElementById('numeroVocales').innerText = contarVocales('hola mundo');
  document.getElementById('sumaTotal').innerText = sumarNumeros([1, 2, 3, 4, 5]);
  document.getElementById('maximo').innerText = encontrarMaximo([1, 2, 3, 4, 5]);
  document.getElementById('maximoNegativo').innerText = encontrarMaximo([-1, -2, -3, -4, -5]);
});
