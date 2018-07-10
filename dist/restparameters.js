/**
* We can also pass an undetermined number of parameters to a function.
* In JavaScript we could use the arguments variable to control this,
* in TypeScript we have to declare it explicitly
* Obviously, they must be defined after the required parameters
*/
function charge(total) {
    var discount = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        discount[_i - 1] = arguments[_i];
    }
    var result = total;
    for (i = 0; i < discount.length; i++) {
        result = result - discount[i];
    }
    return result;
}
;
console.log('Total is ' + charge(50));
console.log('Total with discounts ' + charge(50, 10, 5, 3.4));
