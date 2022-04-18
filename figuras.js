//CUADRADO

const squareSide = 5;
const squarePerimeter = (side) => 4 * side;
const squareArea = (side) => side * side;



//TRIANGULO
console.group("Triángulo");
const trianSide1 = 6;
const trianSide2 = 8;
const trianBase = 4;
const trianHeigth = 5.5;

const trianPerimeter = (s1, s2, s3) => s1 + s2 + s3;
const trianArea = (base, heigth) => (base * heigth) / 2;


//CIRCULO
const pi = Math.PI;
const radius = 4;

const circlePerimeter = (r) => pi * r * 2;
const circleArea = (r) => pi * r * r;





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
  const l1 = parseInt(document.getElementById("side1").value);
  const l2 = parseInt(document.getElementById("side2").value);
  const b = parseInt(document.getElementById("base").value);

  const perimeter = trianPerimeter(l1, l2, b);
  alert(perimeter);
}

function calcTrianArea() {
  const h = parseInt(document.getElementById("heigth").value);
  const b = parseInt(document.getElementById("base").value);

  const area = trianArea(b, h);
  alert(area);
}

function calcCirclePerim() {
    const r = parseInt(document.getElementById("radius").value);
   
  
    const perimeter = circlePerimeter(r)
    alert(perimeter);
  }

  function calcCircleArea() {
    const r = parseInt(document.getElementById("radius").value);
   
  
    const area = circleArea(r)
    alert(area);
  }
