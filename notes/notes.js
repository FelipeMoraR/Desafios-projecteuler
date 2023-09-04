//What are sets?
//A = 
//Wich set types are?
//A = 

//What is a SET?
//A = It is an object that ignore the duplicate number values as string values
var a = new Array(1,1,2,2,3,3,4,4,5,5);
var setNumeros = new Set(a);

console.log(setNumeros);

//Separe a string and saved it in an array
var b = "aaaaabbbbcccc".split("");
var setLetras = new Set(b);

console.log(setLetras);

var mapa = new Map();

//Key and value
mapa.set(1, "agustin");
console.log(mapa);