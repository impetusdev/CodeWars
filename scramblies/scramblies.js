// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False
console.time('time');
console.log(scramble('katas', 'steak'));


function scramble(str1, str2) {
    
    str1 = str1.split('')
    str2 = str2.split('')
    
    // check if every letter in str2 is accounted for in str1
    return str2.every(char => { 
        return str1.some( (char2, i) => {
            if(char2 === char){
                str1.splice(i, 1);
                return true;
            }
            return false; 
        });
    });
}

console.timeEnd('time');

// ---------------------------- //

// console.time('ScrambleWhile');
scrambleWhile('katas', 'steak');

function scrambleWhile(str1, str2) {
    
    str1 = str1.split('')
    str2 = str2.split('')
    let foundChar = true
    
    for (let i = 0; i < str2.length ; i++ ){
        if (foundChar) {
            foundChar = str1.some( (char2, i) => {
                if(char2 === str1[i]){
                    str1.splice(i, 1);
                    return true;
                }
                return false; 
            });
        } else {
            break;
        }

    }

    return foundChar;
}

function isMatchingChar( char )

// console.timeEnd('ScrambleWhile');

