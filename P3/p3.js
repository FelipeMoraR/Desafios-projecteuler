function largestPrimeFactor(number) {

    let i = 2,
    division = 1;

    if (number <= 1) return 0;

    while (i < number) {
       
        if (number % i == 0) {
            console.log(i);
            division = number / i;
            number = division;
           
        } else i++;
    }

    return number;
}

console.log(largestPrimeFactor(15));
