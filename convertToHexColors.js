function rgb(r, g, b){
    const hexRange = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    // results = '';
    
    // looping over all arguments (r,g,b) we convert all values into their respecive hexValues
    // for (let i = 0; i < arguments.length; i++ ){
    //     // Limit the values of rgb to a max of 255
    //     if(arguments[i] > 255) {
    //         arguments[i] = 255;
    //     } else if( arguments[i] < 0){
    //         arguments[i] = 0;
    //     }
        
    //     let Hex = hexRange[Math.floor(arguments[i] / 16)];
    //     let Remainder = hexRange[arguments[i] % 16];
    //     results += Hex + Remainder;
    // }

    args = [...arguments]


    args.reduce((prev, curr) => {
        if(curr > 255) {
            curr = 255;
        } else if( curr < 0){
            curr = 0;
        }

        let Hex = hexRange[Math.floor(curr / 16)];
        let Remainder = hexRange[curr % 16];
        return prev + Hex + Remainder;

    }, '');
    return results;
}


console.log(rgb(0, 0, 0), '000000')