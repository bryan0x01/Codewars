// I would like to be able to pass an array with two elements to my swapValues function to 
// swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(args) {
    var temp = args[0];
    args[0] = args[1];
    args[1] = temp;
}

//I found this problem a bit tricky at first because the function itself looks correct, 
//but the issue is really about how arrays and variables work when passed into functions. 
//It helped me understand that arrays are passed by reference, and the swap only works if 
//the original array is actually used.