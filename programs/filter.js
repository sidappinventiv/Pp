let n= [1,2,3,4,5,6];

function checkEven(n) {
  if (n % 2 == 0)
    return true;
  else
    return false;
}

let evenNumbers = n.filter(checkEven);
console.log(evenNumbers);
