//My solution
var a = 6, b = 2;



for (a; a > b; a--) {
    console.log( b + " es menor");
}

//Other solutions

function comparativeW(a, b) {
    minimo = 0;
    while (a && b) { // 0 = false , other number = true
        --a;
        --b;
        ++minimo;
    }
    return minimo;
}

console.log(comparativeW(a, b));

//Other solutions
function comparativeA(a, b){
    let arreglo = [ a, b ];
    return arreglo[+(a > b)]; // If is true return the position 1(B) but if is false return the position 0 (A), () = return true or false and the + change the boolean atribute to a number.
    
}

console.log(comparativeA(2, 4));