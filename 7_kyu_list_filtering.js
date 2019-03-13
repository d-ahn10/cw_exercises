// In this kata you will create a function that takes a list of non-negative integers 
// and strings and returns a new list with the strings filtered out.

// Example:
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // iterate through list array, check each item to see if it matches datatype of string.
    // only save the the integers and save them into anther list array as output
        
    let output = [];
    let i = 0;
    let eachItem;
    while (i < l.length) {
        eachItem = l[i];
        if(typeof(eachItem) === "number") {
            output.push(eachItem);
        }
        i++;
    }
    return output;
}
