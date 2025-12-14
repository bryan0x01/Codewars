// In this little assignment you are given a string of space separated numbers, 
// and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest
// number is first.

function highAndLow(numbers) {
  let nums = numbers.split(" ");
  
  let highest = parseInt(nums[0]);
  let lowest = parseInt(nums[0]);

  for (let i = 0; i < nums.length; i++) {
    let current = parseInt(nums[i]);

    if (current > highest) {
      highest = current;
    }

    if (current < lowest) {
      lowest = current;
    }
  }

  return highest + " " + lowest;
}

//It was a good reminder of converting data types properly and keeping 
//the logic clear and easy to follow.