/**
 * array has some duplicate elements
 * []
 **/ 

function duplicateArray(array){
  const unique = [];
  for (const item of array){
    if (unique.includes(item) === false){
      unique.push(item);
    }
  }
  return unique;
}

const numbers = [2,4,33,2,56,4,5,6,33,67,2,56];
const birianykhor = ['abul', 'babul', 'cabul' ,'dabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul']
const uniqueArray = duplicateArray(numbers)
console.log(uniqueArray);