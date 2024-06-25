/*Tarea 1: Invertir una cadena
Debe crear una función que tome una cadena como entrada y devuelva la cadena invertida. Para ello, deberá invertir el orden de los caracteres de la cadena.
Aquí tienes una guía paso a paso que te ayudará a completar esta tarea:
Defina una función con un nombre significativo que tome una cadena como parámetro.
Dentro de la función, use métodos Javascript incorporados para invertir los caracteres de la cadena.
Devuelve la cadena invertida como salida de la función: */ 


function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
  }
  
  console.log(invertirCadena("Luis")); 
  

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
  /*Tarea 2: Número primo
Para esta tarea, debe escribir una función que determine si un número dado es un número primo. Un número primo es un número natural mayor que 1 que no tiene divisores positivos distintos de 1 y él mismo.
A continuación, te explicamos cómo puedes abordar esta tarea:
Cree una función con un nombre descriptivo que tome un número como argumento.
Implemente una lógica dentro de la función para verificar si el número es divisible por cualquier otro número excepto 1 y él mismo.
Devuelve un valor booleano (verdadero o falso) en función de si el número es primo o no.*/


function esNumeroPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  console.log(esNumeroPrimo(7)); 
  console.log(esNumeroPrimo(4));
  

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
/*Tarea 3: Eliminar duplicados en un arreglo
Su tarea es escribir una función que elimine los elementos duplicados de un  arreglo. Esto significa que la función debe tomar un arreglo como entrada y devolver un nuevo arreglo con los elementos duplicados eliminados.
Para realizar esta tarea, siga estos pasos:
Defina una función con un nombre claro que tome un arreglo como argumento.
Dentro de la función, use métodos de arreglos de Javascript para filtrar los elementos duplicados y crear un nuevo arreglo sin duplicados.
Devuelve el nuevo arreglo sin elementos duplicados como salida de la función.*/


function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
  }
  
  console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); 


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
/*Tarea 4: Factorial de un número
En esta tarea, debe escribir una función que calcule el factorial de un número dado. El factorial de un entero no negativo n es el producto de todos los enteros positivos menores o iguales que n.
A continuación, te explicamos cómo puedes abordar esta tarea:
Cree una función con un nombre apropiado que tome un número como argumento.
Implemente una lógica dentro de la función para calcular el factorial del número dado usando un bucle o recursividad.
Devuelve el valor factorial como salida de la función.*/

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
      factorial *= i;
    }
    return factorial;
  }
  
  console.log(calcularFactorial(5)); 
  

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
/*Tarea 5: Recuento de vocales
La siguiente tarea es crear una función que cuente el número de vocales de una cadena determinada. Las vocales son las letras 'a', 'e', 'i', 'o' y 'u'.
Para completar esta tarea, siga estos pasos:
Defina una función con un nombre significativo que tome una cadena como argumento.
Dentro de la función, use un bucle o métodos de matriz para iterar a través de los caracteres de la cadena y contar las ocurrencias de vocales.
Devuelve el recuento total de vocales en la cadena como salida de la función.*/


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
  
  console.log(contarVocales("hola mundo")); 


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
/*Tarea 6: Suma los números en un arreglo
Para esta tarea, debe escribir una función que sume todos los números de un arreglo dada.Se debera realizar la suma de todos los números que se encuentren dentro del arreglo.
A continuación, te explicamos cómo puedes abordar esta tarea:
Cree una función con un nombre descriptivo que tome un arreglo como argumento.
Usa bucles anidados para iterar a través del arreglo calcular la suma de todos los números.
Devuelve la suma total de los números del arreglo como salida de la función.*/


function sumarNumeros(arreglo) {
    let suma = 0;
    for (let numero of arreglo) {
      suma += numero;
    }
    return suma;
  }
  
  console.log(sumarNumeros([1, 2, 3, 4, 5])); 


/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/ 
/*Tarea 7: Encontrar el máximo en una operación
Su tarea final es crear una función que encuentre el número máximo en un arreglo determinado. Debe escribir una función que tome un arreglo de números como entrada y devuelva el número máximo en el arreglo.
Para realizar esta tarea, siga estos pasos:
Defina una función con un nombre claro que tome un arrego de números como argumento.
Dentro de la función, implemente una lógica para iterar a través del arreglo y encontrar el número máximo.
Devuelve el número máximo como salida de la función.*/


function encontrarMaximo(arreglo) {
    let maximo = -Infinity;
    for (let numero of arreglo) {
      if (numero > maximo) {
        maximo = numero;
      }
    }
    return maximo;
  }
  
  console.log(encontrarMaximo([1, 2, 3, 4, 5])); 
  console.log(encontrarMaximo([-1, -2, -3, -4, -5])); 
  
