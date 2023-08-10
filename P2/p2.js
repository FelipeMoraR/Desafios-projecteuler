var sum = 0;
var sumPar = 0;
var contador = 1;
let fino = [1,2];

while (fino[fino.length - 1] < 4000000){
    contador++;
    sum = fino[fino.length - 1] + fino[fino.length - 2];
    fino.push(sum);
    
}

for (let i = 0; i < fino.length; i++){

    if (fino[i] % 2 == 0) {
        sumPar += fino[i]; 
    }
    

}

console.log(sumPar);




console.log("Other solution")

var a = 1 ; 
var b = 2 ; 

var sumOther = 2; 

while( b < 4000000) {

    a = a + b;
    if ( a % 2 == 0){
        sumOther += a;
    }

    b = a + b;
    if ( b % 2 == 0){
        sumOther += b;
    }
}

console.log(sumOther)
