function humanReadable (seconds) {
    //convert the seconds into three different data sets.

    let h = 0;
    let m = 0;
    let s = 0;
    
    // convert the time into a string that is always two digits
    console.log( seconds );
    h = Math.floor(seconds/3600);
    seconds = seconds - 3600 * h;
    console.log( seconds );
    
    m = Math.floor(seconds/60);
    console.log(m)
    seconds = seconds - 60 * m;
    console.log( seconds );

    s = seconds;
    
    console.log( 'final seconds', seconds );
    console.log(s);
    [h, m, s] = [h, m, s].map( t => {
        console.log( 'hello', '0' + t )
        return t < 10 ? '0'+ t : t;
    });

    return `${h}:${m}:${s}`;
}


console.log(humanReadable(59));



// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.