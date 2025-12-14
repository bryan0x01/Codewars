// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the 
// same backwards as forwards, such as madam or racecar.

function isPalindrome(str) {
  let text = str.toLowerCase();
  let left = 0;
  let right = text.length - 1;

  while (left < right) {
    if (text[left] !== text[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

// I liked this problem, I have done in multiple ocasions in different languages one of them
//was in the gateway, in python