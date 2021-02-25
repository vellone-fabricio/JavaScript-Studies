console.log("\t\bSTUDYING FUNCTION 1:\n");

function primeNumbers(interval){
  let allPrime = [];
  let arr = [];

  if (interval[0] > interval[1]){
    let aux = interval[0];
    interval[0] = interval[1];
    interval[1] = aux;
  }
  interval[0] = Math.ceil(interval[0]);
  interval[1] = Math.floor(interval[1]);


  for (let i = interval[0]; i<=interval[1]; i++){
    arr.push(i);
  }


  for (let i = 0; i< arr.length; i++) {
    let count = 0;

    if (arr[i] > 0) {
      for (let j = 1; j<=arr[i]; j++){
        if (arr[i] % j == 0) count++;
      }
      if (count == 2 || count == 1) allPrime.push(arr[i]);

    }
  }
  
  return allPrime;
}

function testA(interval){
  console.log(`Outputs of our function 'Prime Numbers', between the interval [${interval[0]}, ${interval[1]}]:`);

  const result = primeNumbers(interval);

  console.log(`The values which are Prime numbers are: ${result}\nSo the number of prime numbers in this array is ${result.length}\n`);
}

testA([1, 49]);
testA([4.5, 49.9]);
testA([-11, 20]);
testA([-51, 0]);
testA([-55.9, 193.99]);
testA([555, 193.99]);


//-----------------------------------------------------------------------------
console.log("\t\bSTUDYING FUNCTION 2:\n");
function squareNumbers(interval){
  let allSquare = [];
  let arr = [];

  if (interval[0] > interval[1]){
    let aux = interval[0];
    interval[0] = interval[1];
    interval[1] = aux;
  }
  interval[0] = Math.ceil(interval[0]);
  interval[1] = Math.floor(interval[1]);


  for (let i = interval[0]; i<=interval[1]; i++){
    arr.push(i);
  }

  for (let i=0; i<arr.length; i++){
    if (arr[i] > 0){
      if (Number.isInteger(Math.sqrt(arr[i]))) allSquare.push(arr[i]);
    }
  }

  return allSquare;
}


function testB(interval){
  console.log(`Outputs for our function 'Square Numbers', between the interval [${interval[0]}, ${interval[1]}]:`);

  const result = squareNumbers(interval);

  console.log(`The values which are Square numbers are: ${result}\nSo the number of Square numbers in this array is ${result.length}\n`);
}

testB([1, 49]);
testB([4.5, 49.9]);
testB([-11, 20]);
testB([-51, 0]);
testB([-55.9, 193.99]);
testB([555, 193.99]);


//-----------------------------------------------------------------------------
console.log("\t\bSTUDYING FUNCTION 3:\n");
function Palindrome(string){
  string = String(string).toLowerCase();
  let reverse = string.split("").reverse();
  let reverseJoint = reverse.join("");

  if (string == reverseJoint) return "IS a Palindrome";

  return "ISNT a palindrome";
}


function testC(string){
  console.log(`Outputs for our function 'Palindrome', for the string "${string}":`);

  const result = Palindrome(string);

  console.log(`So, our string ${result}\n`);
}

testC("Coco");
testC("Adda");
testC("CHASUBLE");
testC("2002");
testC(5995.3);
testC(5995);