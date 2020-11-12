let grafico1 = document.querySelector("#grafico1");
let x = [];
let y = [];
let paso = (10) / 100;
for(let xV = -5; xV <= 5; xV += paso){
    x.push(xV)
    y.push(2*(xV)- 4);
}
Plotly.newPlot( grafico1, [{x: x, y: y}],
{ margin: { t: 0} } );
{
    let grafico2 = document.querySelector("#grafico2");
    let x = [];
    let y = [];
    let paso2 = (10) / 100;
    for(let xV = -4; xV <= 4; xV += paso2){
        x.push(xV);
        y.push(6*(Math.sqrt(xV))-3*(xV)-8);
    }
    Plotly.newPlot( grafico2, [{x: x, y: y}],
    { margin: { t: 0} } );
}
{
    let grafico3 = document.querySelector("#grafico3");
    let x = [];
    let y = [];
    let paso3 = (2 * Math.PI -0) / 100;
    for(let xV = -7; xV <= 7; xV += paso3) {
        x.push(xV)
        y.push(Math.sin(xV));
    }
    Plotly.newPlot( grafico3, [{x: x, y: y}],
    { margin: { t: 0} } );
}