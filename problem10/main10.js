// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)

function findOutlier(integers) {
  //your code here
  const even = integers.filter((num) => num % 2 === 0);
  const odds = integers.filter((num) => num % 2 !== 0);

  console.log(even);
  console.log(odds);

  if (even.length === 1) {
    return even[0];
  } else {
    return odds[0];
  }
}

//seperate into even or odds
/*determine which group has one 1 number
  -if the length is equal to 1 then the outlier is in the even array, otherwise its going to be in the odds array
  
  */
