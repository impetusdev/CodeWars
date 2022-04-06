// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered
// Input strings s1 and s2 are null terminated.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


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

// ---------------------------- //

function scrambleForSome(str1, str2) {
    
    str1 = str1.split('')
    str2 = str2.split('')

    for (let i = 0; i < str2.length ; i++ ){
        if (!foundChar(i)) {return false;}
    }

    return true;

    function foundChar(i){
        return str1.some( (char1, j) => {
            if(char1 === str2[i]){
                str1.splice(j, 1);
                return true;
            }
            return false; 
        });
    }
}// ---------------------------- //

function scrambleBest(str1, str2) {
    let occurences = str1.split("").reduce((charCounter, cur) => { 
        charCounter[cur] ? charCounter[cur]++ : charCounter[cur] = 1; 
        return charCounter; 
    }, {});
    
    return str2.split("").every((character) => --occurences[character] >= 0);
}


//TESTS//
console.time('ScrambleEvery steak');
console.log(scramble('katas', 'steak'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.timeEnd('ScrambleEvery steak');

console.time('scrambleForSome steak');
console.log(scrambleForSome('katas', 'steak'));
console.log(scrambleForSome('cedewaraaossoqqyt', 'codewars'));
console.timeEnd('scrambleForSome steak');

console.time('scrambleBest steak');
console.log(scrambleBest('katas', 'steak'));
console.log(scrambleBest('cedewaraaossoqqyt', 'codewars'));
console.timeEnd('scrambleBest steak');
