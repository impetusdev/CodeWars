function encrypt(text, n) {
    for (let i = 0; i < n; i++){
        odd = ''
        even = ''
        
        for( let j = 0; j < text.length ; j ++){
            if( j % 2 === 0){
                even += text[j]
            } else {
                odd += text[j]
            }
        }

        text = odd + even;
    }
    return text;
}

function decrypt(encryptedText, n) {
    
}


console.log(encrypt("This is a test!", 0), "= This is a test!");
console.log(encrypt("This is a test!", 1), "= hsi  etTi sats!");
console.log(encrypt("This is a test!", 2), "= s eT ashi tist!");
console.log(encrypt("This is a test!", 3), "=  Tah itse sits!");
console.log(encrypt("This is a test!", 4), "= This is a test!");