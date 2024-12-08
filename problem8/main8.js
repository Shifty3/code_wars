// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// // What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  // TODO

  //initializing object to keep count
  let charCount = {};

  if (string === "") {
    return charCount;
  }

  //shorthand for looping through the string
  for (let char of string) {
    //checking if the character already exists
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  console.log(charCount);
  return charCount;
}

//I wanted to try the for of looping method this time, this challenge
