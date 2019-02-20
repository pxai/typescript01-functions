/**
* We can also pass an undetermined number of parameters to a function.
* In JavaScript we could use the arguments variable to control this,
* in TypeScript we have to declare it explicitly
* Obviously, they must be defined after the required parameters
*/
function charge (total: number, ...discount: number[]): number {
  let result: number = total;
  for (i=0; i < discount.length; i++) {
    result = result - discount[i];
  }
  return result;
};


console.log('Total is ' + charge(50));
console.log('Total with discounts ' + charge(50,10,5,3.4));
