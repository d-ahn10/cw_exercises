// Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.

// For example: ["3:1", "2:2", "0:1", ...]

// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:

// if x>y - 3 points
// if x<y - 0 point
// if x=y - 1 point
// Notes:

// there are 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

using System.Linq;

public static class Kata {
    public static int TotalPoints(string[] games) {
        // go through each match in string array games
        // at each match check x and y conditionals and determine the point value (3, 0, or 1)
        // at each match check, bc it is a string, the first number(char[0]) will be x and
        // second number(char[2]) will be y;
        // save that value to add until end of string of array/matches (length is 10)
        // return that eachMatch as the output
        // note: output needs to be a number (int)

        string eachMatch = null;
        int numX = 0;
        int numY = 0;
        int output = 0;

        for (int i = 0; i < games.Length; i++) {
            eachMatch = games[i];
            numX = Convert.ToInt32(eachMatch[0]);
            numY = Convert.ToInt32(eachMatch[2]);
            if (numX > numY) {
                output += 3;
            } else if (numX == numY) {
                output += 1;
            }
        }

        return output;
    }
}