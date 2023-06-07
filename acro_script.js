
const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} wordsStr A string to be turned into an acronym.
 * @returns {string} The acronym.
 */
function acronymize(str) {
    let result = "";
    let temp = str.split(' ');

    for (var i = 0; i < temp.length; i++){
        if (temp[i] != '') {
            result += temp[i][0].toUpperCase();
        }
    }
    console.log(result);
}

/*****************************************************************************/
// console.log(str4);
// console.log(str4.split(' '))

acronymize(str1);
acronymize(str2);
acronymize(str3);
acronymize(str4);


function acronymize(str) {
    // empty string to store our results in
    let result = "";
    // temp stores the array the split strings
    let temp = str.split(' ');
    // for loop through the temp array
    for (var i = 0; i < temp.length; i++){
        // check if the value at array is not undefined
        if (temp[i] != '') {
            // add the UpperCase value of the first letter of the string into the result
            result += temp[i][0].toUpperCase();
        }
    }
    console.log(result, ":", str)
    // console.log(result);
}