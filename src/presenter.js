// Importar funciones de otros archivos (asegúrate de que las rutas sean correctas)
import sumar from "./sumador";
import multiplicar from "./multiplicador";

// Seleccionar elementos del DOM
const first = document.querySelector("#primer-numero");
const firt = document.querySelector('#primero');
const secon = document.querySelector("#segundo");
const second = document.querySelector("#segundo-numero");
const formu = document.querySelector('#multiplicar-form');
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");
const resu = document.querySelector("#resultadoMul");

// Agregar evento al formulario de sumar
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  // Utilizar la función sumar y actualizar el contenido del div
  div.innerHTML = `<p>${sumar(firstNumber, secondNumber)}</p>`;
});

// Agregar evento al formulario de multiplicar
formu.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const firstNumber = Number.parseInt(firt.value);
  const secondNumber = Number.parseInt(secon.value);

  // Utilizar la función multiplicar y actualizar el contenido del div
  resu.innerHTML = `<p>${multiplicar(firstNumber, secondNumber)}</p>`;
});
