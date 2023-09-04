//Determinate if the values are equals or not without = , + and -

//XOR 
function sonIguales(num1, num2) {
    return (num1 ^ num2); // This is XOR, IT is a logic exclusion , if you have ONLY 1 true the operation return True, if you have two same declarations will return False
  }
  


  // Example
  var numero1 = 5; 
  var numero2 = 5;
  var resultado = sonIguales(numero1, numero2); //In this case XOR transform the integers to a binary, so 5 in binary is 0101 and compares that 2 binarys , so the comparation will return 0000 and that in decimal is 0 so that is false but still being a number, in the function we are applicating the ! and that will change to a boolean value. 

  if (resultado) {
    console.log("Los números son iguales.");
  } else {
    console.log("Los números son diferentes.");
  }

var a = 1;
console.log(!a)