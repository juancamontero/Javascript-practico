//CUADRADO


const squarePerimeter = (side) => 4 * side;
const squareArea = (side) => side * side;

//TRIANGULO


const trianPerimeter = (s1, s2, s3) => s1 + s2 + s3;
const trianArea = (base, heigth) => (base * heigth) / 2;

//CIRCULO
const pi = Math.PI;
const radius = 4;

const circlePerimeter = (r) => pi * r * 2;
const circleArea = (r) => pi * r * r;

// ALTURA ISOCELES

const esIsoceles = (l1, l2, l3) =>
  l1 === l2 || l1 === l3 || l2 === l3 ? true : false;

const heigthTrian = (base, side) => Math.sqrt(side ** 2 - (base / 2) ** 2);

// interactua con HTML

function calcSquarePerim() {
  const value = document.getElementById("squareSide").value;
  const perimeter = squarePerimeter(value);
  alert(perimeter);
}

function calcSquareArea() {
  const value = document.getElementById("squareSide").value;
  const area = squareArea(value);
  alert(area);
}

function calcTrianPerim() {
  const l1 = parseFloat(document.getElementById("side1").value);
  const l2 = parseFloat(document.getElementById("side2").value);
  const b = parseFloat(document.getElementById("base").value);

  const perimeter = trianPerimeter(l1, l2, b);
  alert(perimeter);
}

function calcTrianArea() {
    debugger;
  const h = parseFloat(document.getElementById("heigth").value);
  const b = parseFloat(document.getElementById("base").value);

  const area = trianArea(b, h);
  alert(area);
}

function calcCirclePerim() {
  const r = parseFloat(document.getElementById("radius").value);

  const perimeter = circlePerimeter(r);
  alert(perimeter);
}

function calcCircleArea() {
  const r = parseFloat(document.getElementById("radius").value);

  const area = circleArea(r);
  alert(area);
}

function isocelesProcess() {
debugger;

  const l1 = parseFloat(document.getElementById("side1i").value);
  const l2 = parseFloat(document.getElementById("side2i").value);
  const base = parseFloat(document.getElementById("basei").value);

  if (esIsoceles(l1, l2, base)) {
    alert("Es isóceles y la altura es " + heigthTrian(base, l1) + " cms");
  } else {
    alert("No es isóceles");
  }
}
