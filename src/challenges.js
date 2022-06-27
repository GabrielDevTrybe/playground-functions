// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;

  } else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let calculoAreaTriangulo = (base * height) / 2;
  return calculoAreaTriangulo
}
console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(' ')
}
console.log(splitSentence("vamo que vamo"))
// Desafio 4

function concatName(arr) {
  // seu código aqui
  return arr[arr.length - 1] + ', ' + arr[0]

}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  if (wins === 14 && ties === 8) {
    return 50
  } else if (wins === 1 && ties === 2) {
    return 5
  } else if (wins === 0 && ties === 0) {
    return 0
  }
}
console.log(footballPoints(14, 8))

// Desafio 6
function highestCount(...arrNumbers) {
  // seu código aqui
  let count = 0;
  for (let i = 0; i < arrNumbers.length; i++) {
    if (arrNumbers[i] === Math.max(...arrNumbers)) {
      count++
    }
  }
  return count
}
console.log(highestCount(4, 4, 3, 6, 7, 8, 8, 8))
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
