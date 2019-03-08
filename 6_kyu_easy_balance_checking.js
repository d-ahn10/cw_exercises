// You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

// "1000.00
// 125 Market 125.45
// 126 Hardware 34.95
// 127 Video 7.45
// 128 Book 14.32
// 129 Gasoline 16.10"
// The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount.

// First you have to clean the lines keeping only letters, digits, dots and spaces.

// Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

// "Original_Balance:_1000.00
// 125_Market_125.45_Balance_874.55
// 126_Hardware_34.95_Balance_839.60
// 127_Video_7.45_Balance_832.15
// 128_Book_14.32_Balance_817.83
// 129_Gasoline_16.10_Balance_801.73
// Total_expense__198.27
// Average_expense__39.65"
// On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

// Notes
// It may happen that one (or more) line(s) is (are) blank.
// Round to 2 decimals your results.
// The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".

function balance(book) {
    // store the cleaned book into a variable
    var pattern = /[^a-zA-Z0-9. \n]/gm;
    
    // use regex to clean book data so we can actually start to use it.
    var cleanBook = book.replace(pattern, "");
    
    // declare variables & arrange accordingly to re-use for finalOutput return
    var bookArr = cleanBook.split(/\n/);
    var wordBal = "Balance";
    var finalOutput = "Original Balance: " + parseFloat(bookArr[0]).toFixed(2) + "\r\n";
    var expenses = null;
    var itemDesc = null;
    var initialBal = parseFloat(bookArr[0]);
    var runningBal = initialBal;
    var avgExpense = null;
    var sumExpense = 0;
    var counter = 0;
    
    // iterate through the cleaned book array
    for (var i = 1; i < bookArr.length; i++) {
      var eachItem = bookArr[i];
      
      // there's an empty string in bookArr so it'll come out falsey anyways, therefore if(eachItem) coming out truthy will suffice.
      if(eachItem) {
        var lastSpaceIndex = eachItem.lastIndexOf(" ");
        expenses = eachItem.substr(lastSpaceIndex, eachItem.length - lastSpaceIndex);
        itemDesc = eachItem.substr(0, lastSpaceIndex+1);
        runningBal -= parseFloat(expenses);
        sumExpense += parseFloat(expenses);
        counter++;
        finalOutput += itemDesc + parseFloat(expenses + "0 ").toFixed(2)+ " " + wordBal + " " + runningBal.toFixed(2) + "\r\n";
      }
      avgExpense = (sumExpense / counter);
    }
    return finalOutput + "Total expense  " + sumExpense.toFixed(2) + "\r\n" + "Average expense  " + avgExpense.toFixed(2);
  }