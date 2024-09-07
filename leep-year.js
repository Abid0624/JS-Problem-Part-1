/**
 * SIMPLE LOGIC : NOT 100% TRUE;
 *year will be a leap year if the year is divisible by 4; 
 **/ 

 function leapYear(year){
  if(year % 4 === 0){
    return true;
  }
  else{
    return false;
  }
 }

 const isLipi = leapYear(2045);
 console.log(isLipi);

/**
 * 1. those year that is not divisible by 100 and if the year is divisible by 4: then it will be a leap year
 * 2. then the year is divisible by 400 : it will be a leap year
 * 3. else it will not be a leap year
 **/  

function isLeapYear(year){
  if(year % 100 !== 0 && year % 4 === 0){
    return true;
  }
  else if (year % 400 === 0){
    return true;
  }
  else{
    return false;
  }
}

const isLeap = isLeapYear(2100);
const isLeap2 = isLeapYear(2400);
const isLeap3 = isLeapYear(1900);
const isLeap4 = isLeapYear(2052);

console.log(isLeap,isLeap2,isLeap3,isLeap4);