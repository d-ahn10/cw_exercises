// Write a function named sumDigits which takes a number as input and returns the sum of the 
// absolute value of each of the number's decimal digits. 
// For example:

 // sumDigits(10);  // Returns 1
 // sumDigits(99);  // Returns 18
 // sumDigits(-32); // Returns 5

// *Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    // make sure all numbers being passed in are positive. If not, then convert to positive.
        if (number<0) {
            number = -number;
        }

    // split up each digit and save it as numberList;
        let numberList = (number + "").split('');
        let output = 0;

    // go through each number in the list one by one and add them as we go. store this value as the output;
        let i = 0;
        while (i<numberList.length) {
            output += parseInt(numberList[i]);
            i++;
        }
    // print the output when done
        return output;
}
