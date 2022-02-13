// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

// What is considered Valid?
// A string of braces is considered valid if all braces are matched with the correct brace.

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False


function validBraces(braces){
    const matchingPairs = {
      '[': ']',
      '(': ')',
      '{': '}'
    }
    const reverseMatchingPairs = {
        ']': '[',
        ')': '(',
        '}': '{'
      }

    const openBrackets = Object.keys(matchingPairs);
    const endBrackets = [']', ')', '}']
    braces = braces.split('');

    console.log(braces)

    
    i = 0;
    while ( braces.length !== 0 ) {
        i++;
        
        if( !openBrackets.some( el => el == braces[i])) {
            console.log( 'closing bracket found')
            
            if (matchingPairs[braces[i - 1]] !== braces[i]){
                console.log( 'this closing bracket did not match' );
                return false;
            } else {
                console.log(braces)
                braces.splice(i - 1, 2)
                console.log(braces)

                i = 0;
            }
        }
    }
    
    return true;
}

console.log(validBraces('[{}](){}'));


