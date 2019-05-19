// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use 
// colors which, for the sake of simplicity, are named with letters from a to m.

// The colors used by the printer are recorded in a control string. For example a "good" control string 
// would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one 
// time color h then one time color a...

// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is 
// produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

// You have to write a function printer_error which given a string will output the error rate of the 
// printer as a string representing a rational whose numerator is the number of errors and the denominator 
// the length of the control string. Don't reduce this fraction to a simpler expression.

// The string has a length greater or equal to one and contains only letters from ato z.

// Examples: 
// input is: s="aaabbbbhaijjjm"
// output is: (s) => "0/14"

// input is: s="aaaxbbbbyyhwawiwjjjwwm"
// output is: error_printer(s) => "8/22"

function printerError(s) {
    // count the ammount of times a char is not a-through-m using ASCII to check
    // every time a "non" a-through-m char is matched, increase the counter
    // print result by combining num of mismatches + "/" + length of string.

    // declare variables
    var counter = 0;
    var strLen = s.length;
    var output = "";

    // go through string of characters

    for (var i = 0; i <= strLen; i++) {
        if (s.charCodeAt(i) >= 110) {
            counter++;
        }
    }
    return output + counter + "/" + strLen;
}

// ASCII solution ^

function printerError(s) {
    var pattern = /[n-z]/gm;
    var output = s.match(pattern).length + "/" + s.length;

    var numOfMatches = numOfMatches + "/" + s.length;
    if (numOfMatches) {
      numOfMatches = 0;
    } else {
      numOfMatches = numOfMatches + "/" + s.length
    }
    return output;
}

// RegEX Solution ^
