//  Q1
let myNums = [1, 2, 3, 5];

// Solve Using For

let powArr = [];

for (let i = 0; i < myNums.length; i++) {
  let f = 1;
  for (let j = 1; j <= myNums[i]; j++) {
    f *= 2;
  }
  powArr.push(f);
}

console.log(powArr);

// Solve Using Foreach

myNums.forEach(function (e) {
  console.log(Math.pow(2, e));
});

// Solve Using Map

let myPow2 = myNums.map(function (el) {
  return Math.pow(2, el);
});
console.log(myPow2);

//  Q2

function classifyNumbers(arr) {
  let classify = arr.map(function (e) {
    return isNaN(e) ? "N/A" : e % 2 === 0 ? "even" : "odd";
  });
  return classify;
}

let inputArray = [1, 2, 3, "Rawan"];

console.log(classifyNumbers(inputArray));

// Q3

let names = ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

names.forEach((name) => {
  console.log(name);
});

// Q4

function fizzbuzz(arr) {
  return arr.map(function (ele) {
    if (ele % 3 === 0 && ele % 5 === 0) return `Fizz Buzz`;
    else if (ele % 3 === 0) return `Fizz`;
    else if (ele % 5 === 0) return `Buzz`;
    else return ele;
  });
}

let arr = [1, 3, 5, 15, 16, 18, 20, 30];
console.log(fizzbuzz(arr));
