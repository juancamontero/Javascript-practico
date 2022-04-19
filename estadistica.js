const currentSimpleData = [5, 6, 9, 9];

const ponderados = [
  { id: "jk", val: 68, w: 65 },
  { id: "vl", val: 80, w: 6 },
  { id: "ch", val: 68, w: 65 },
  { id: "amm", val: 78, w: 85 },
];

const simpleResultBox = document.getElementById("simpleResult");

const calcMedia = (array) => {
  //   let suma = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     suma += array[i];
  //   }

  //   return suma / array.length;

  const suma = array.reduce(
    (valorAcumulado = 0, item) => valorAcumulado + item
  );

  return suma / array.length;
};

const calcMediana = (array) => {
  // debugger;
  array.sort((a, b) => a - b);
  const mitad = array.length / 2;

  if (esPar(array.length)) {
    return (array[mitad - 1] + array[mitad]) / 2;
  } else {
    return array[Math.floor(mitad)];
  }
};

const esPar = (num) => (num % 2 === 0 ? true : false);

const calcModa = (array) => {
  array.sort((a, b) => a - b);

  const frequencia = {};

  array.map((item) => {
    if (frequencia[item]) {
      frequencia[item]++;
    } else {
      frequencia[item] = 1;
    }
  });

  const frequenciaArray = Object.entries(frequencia).sort(
    (a, b) => b[1] - a[1]
  );
  console.log(frequenciaArray);
  return frequenciaArray[0];
};

const promPonderado = (array) => {
  const arrayValWeight = array.map((item) => item.val * item.w);
  const sumValWeight = arrayValWeight.reduce((a, b) => a + b, 0);
  const arrayWeight = array.map((item) => item.w);
  const sumWeight = arrayWeight.reduce((a, b) => a + b, 0);

  return sumValWeight / sumWeight;
};

function loadSimpleData() {
  // debugger;
  const currentValue = parseFloat(document.getElementById("simple-data").value);

  currentValue
    ? currentSimpleData.push(currentValue)
    : alert("no ha introducido ningún dato");

  showCurrentSimpleData();

  document.getElementById("simple-data").value = NaN;
}

function showCurrentSimpleData() {
  document.getElementById("current-data").innerHTML = "";

  if (currentSimpleData.length > 0) {
    let dataText = "";

    for (let i = 0; i < currentSimpleData.length; i++) {
      dataText += currentSimpleData[i] + "</br>";
    }

    document.getElementById("current-data").innerHTML = dataText;
  }
}

function showMedia() {
  simpleResultBox.innerHTML =
    "La media es <strong> " + calcMedia(currentSimpleData) + "</strong>";
}

function showMediana() {
  simpleResultBox.innerHTML =
    "La mediana es <strong> " + calcMediana(currentSimpleData) + "</strong>";
}

function showModa() {
  let result = calcModa(currentSimpleData);
  simpleResultBox.innerHTML = `La moda es <strong>${result[0]}</strong> y su frecuencia es <strong>${result[1]}</strong>`;
}

function loadWeightedData() {
  // debugger;
  const id = document.getElementById("id-txt").value;
  const value = parseFloat(document.getElementById("value").value);
  const weight = parseFloat(document.getElementById("peso").value);

  if (id && value && weight) {
    let newObject = {};
    newObject.id = id;
    newObject.val = value;
    newObject.w = weight;

    ponderados.push(newObject);

    showCurrentWeightedData();
    showWeightrdAverage();
    document.getElementById("id-txt").value = "";
    document.getElementById("value").value = NaN;
    document.getElementById("peso").value = NaN;
  } else {
    alert("Introduzca todos los datos");
  }
}

function showCurrentWeightedData() {
  document.getElementById("current-data2").innerHTML = "";

  if (ponderados.length > 0) {
    let dataText = "";

    for (let i = 0; i < ponderados.length; i++) {
      dataText += `<strong>Id:</strong>${ponderados[i].id}  - <strong>Val:</strong>${ponderados[i].val} - <strong>Weight:</strong>${ponderados[i].w} </br>`;
    }

    document.getElementById("current-data2").innerHTML = dataText;
  }
}

function showWeightrdAverage() {
  let result = promPonderado(ponderados);

  document.getElementById(
    "weightedResult"
  ).innerHTML = `El promedio ponderado es <strong>${result}`;
}

showCurrentWeightedData();
showCurrentSimpleData();
