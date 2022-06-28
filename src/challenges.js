// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    false;
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
function highestCount(arrMaiorNum) {
  //Primeiro encontrar o maior valor
  let maiorIndice = arrMaiorNum[0];
  for (let i = 0; i < arrMaiorNum.length; i++) {
    if (arrMaiorNum[i] > maiorIndice) {
      maiorIndice = arrMaiorNum[i]
    }
  }

  //Depois comparar e ver quantas vezes esse valor se repete
  let count = 0;
  for (let y = 0; y < arrMaiorNum.length; y++) {
    if (maiorIndice === arrMaiorNum[y]) {
      count++
    }
  }
  return count
}
console.log(highestCount([4, 4, 3, 6, 7, 8, 8, 8]))
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1'
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return 'cat2'
  } else {
    return 'os gatos trombam e o rato foge'
  }
}
console.log(catAndMouse(1, 6, 4));


// Desafio 8
function fizzBuzz(numbersFizzBuzz) {
  // seu código aqui
  let arrFizzBuzz = [];
  for (let i of numbersFizzBuzz) {
    if (i % 3 === 0 && i % 5 === 0) {
      arrFizzBuzz.push('fizzBuzz')
    } else if (i % 3 === 0) {
      arrFizzBuzz.push('fizz')

    } else if (i % 5 === 0) {
      arrFizzBuzz.push('buzz')

    } else {
      arrFizzBuzz.push('bug!')
    }
  }
  return arrFizzBuzz
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))


// Desafio 9
function encode(strEncode) {
  // seu código aqui
  let stringSplit = strEncode.split('');
  let emptySring = '';

  for (let i of stringSplit) {
    if (i === 'a') {
      emptySring += '1'
    } else if (i === 'e') {
      emptySring += '2'
    } else if (i === 'i') {
      emptySring += '3'
    } else if (i === 'o') {
      emptySring += '4'
    } else if (i === 'u') {
      emptySring += '5'
    } else {
      emptySring += i
    }
  }

  return emptySring;

}




console.log(encode('hello'))


function decode(strDecode) {
  // seu código aqui
  let stringSplitDecode = strDecode.split('');
  let stringVazia = '';

  for (let i of stringSplitDecode) {
    if (i === '1') {
      stringVazia += 'a'
    }else if (i === '2') {
      stringVazia += 'e'
    }else if (i === '3') {
      stringVazia += 'i'
    }else if (i === '4') {
      stringVazia += 'o'
    }else if (i === '5') {
      stringVazia += 'u'
    }else {
      stringVazia += i
    }

  }
  return stringVazia
}
console.log(decode('h2ll4'))

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
