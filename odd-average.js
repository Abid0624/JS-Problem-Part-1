/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 **/ 
// process - 1


function oddAverage(numbers){
  let sum = 0;
  let count = 0;
  for (number of numbers){
    if(number % 2 !== 0){
    sum = sum + number;
    count++;
    } 
  }
  const avg = sum / count;
  console.log(sum , count)
  return avg;
}

const numArray = [12, 23, 56, 77, 79, 88, 95, 105]
const avg = oddAverage(numArray);
console.log('The average of odd numbers is : ' ,avg)

// Process - 2

function evenAverage2(numbers){
  let evens = [];
  for (const number of numbers){
    if (number % 2 === 0){
      evens.push(number);
    }
  }
  let sum = 0;
  for (const number of evens){
    sum = sum + number;
  }
  const count = evens.length;
  console.log(sum , count)
  const average = sum / count;
  return average;
}

const numArray2 = [12, 23, 56, 77, 79, 88, 95, 105]
const avg2 = evenAverage2(numArray2);
console.log('The average of odd numbers is : ' ,avg2)