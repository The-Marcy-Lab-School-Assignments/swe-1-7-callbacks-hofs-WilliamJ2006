// Create callback functions for Higher-Order Functions:
const logEachValue = (arr) => {
  if (arr.length <= 0) {
    return arr;
  }
  return arr.forEach((num, index) => console.log(`Value: ${num}, index: ${index}.`))
  // for (let i = 0; i < arr.length; i++) {
  //   console.log(`Value: ${arr[i]}, index: ${i}.`)
  // }
};

const makePeopleHappy = (arr) => {
  return arr.forEach(object => object.isHappy = true);
  // for (let object of arr) {
  //   object.isHappy = true;
  // }
};

const getEvenNumbers = (arr) => {
  // const newArr = [];
  // for (let num of arr) {
  //   if (num % 2 === 0) {
  //     newArr.push(num);
  //   }
  // }
  // return newArr;
  return arr.filter(num => num % 2 === 0);
};

const doubleEveryNumber = (arr) => {
  // const double = [...arr]
  // for (let i = 0; i < double.length; i++) {
  //   double[i] *= 2;
  // }
  // return double;
  return arr.map(num => num * 2);
};

const convertToBooleans = (arr) => {
  // const newArr = []
  // for (let num of arr) {
  //   if (num) {
  //     newArr.push(true);
  //   } else {
  //     newArr.push(false);
  //   }
  // }
  // return newArr;
  return arr.map(num => Boolean(num));
};

// Create your own Higher Order Functions:
const myForEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }

};

const myMap = (arr, transform) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(transform(arr[i]));
  }
  return newArr;
};

const myFilter = (arr, test) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const myFind = (arr, test) => {
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      return arr[i];
    }
  }
};

// Use Array.sort() and provide the correct callback sorting function:
module.exports = {
  logEachValue,
  makePeopleHappy,
  getEvenNumbers,
  doubleEveryNumber,
  convertToBooleans,
  myForEach,
  myMap,
  myFind,
  myFilter,
};
