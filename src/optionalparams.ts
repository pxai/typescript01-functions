/**
* When we invoke a function in TypeScript
* the number and type of parameters must
* match what was declared in the function.
* However, we can add the optional parameter functionality
* with the ? sign
* Obviously, they must be defined after the required parameters
*/
function charge (total : number, discount?: number) : number {
  var taxes : number = 0.5;
  if (discount) {
    return (total * taxes) - discount;
  } else {
    return total * taxes;
  }
};


console.log('Total is ' + charge(50));
console.log('Total with discount ' + charge(50,10));
