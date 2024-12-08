// If you can't sleep, just count sheeps!!

// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

function countSheep(num) {
  //your code here
  let str = "";

  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  //this is gonna return the str each time it iterate over a # greater than 1
  return str;
}

console.log(countSheep(5));
