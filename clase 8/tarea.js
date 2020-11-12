let grafico1 = document.querySelector("#miPrimerGrafico");
// Vamos a graficar la función 8*sin(x)
// Debo generar un objeto que tenga los valores de las x, y los valores de las y.
// Voy a graficar entre 0 y 2*pi, 200 puntos
let x = [];
let y = [];
let paso = (10) / 100;
for (let xV = -5; xV <=5; xV += paso) {
  x.push(xV);
  y.push(2*(xV)-4);
}
console.log(x);
console.log(y);
Plotly.newPlot(
  grafico1,
  [
   // { x: [1, 2, 3, 4, 5], y: [1, 2, 4, 8, 16] },
    { x: x, y: y },
  ],
  {
    margin: { t: 0 },
  }
);
