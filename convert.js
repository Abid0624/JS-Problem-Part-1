// 12 inch 1 feet 

function inchToFeet(inch){
  const feet = inch / 12;
  return feet;
}

const shuvoHeight = inchToFeet(75);
// console.log(shuvoHeight);

function inchToFeet2(inch){
  const feet = inch / 12;
  const feetInt = parseInt(feet);
  const inchRemaining = inch % 12;
  const result = feetInt + ' ft ' +inchRemaining + ' inch.';
  return result;
}


const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);


// Miles to kilometer

function milesToKilo (mile){
  const kilo = mile * 1.60934;
  return kilo;
}

const km = milesToKilo(4);
console.log(km, ' km.')

// Kilometers to mile

function kiloToMiles (km){
  const mile = km * 0.621371;
  return mile;
}

const miles = kiloToMiles(6);
console.log(miles, ' mile.');