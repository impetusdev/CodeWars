function alphabetPosition(text) {
    // figure out what the order of each char is in terms of 
    console.log(`The letter a has a charCode is: ${'a'.charCodeAt(0)}`);
    
    let orig_text = ''
    while( orig_text !== text){
        orig_text = text
        
        text = text.replace(' ', '');
    }
    
    let arr = text.replace(' ', '').toLowerCase().split('').map((letter) => [letter.charCodeAt(0), letter]);
    console.log(arr);
    return ;
}


alphabetPosition('as df as  df');