/**
* We can define default values for parameters and so it will
* not be necessary to provide this parameter when we call to the function
* As optional parameters, parameters with default values
* must be defined after the required parameters
*/
function charge(total, vat) {
    if (vat === void 0) { vat = 0.21; }
    return total + (total * vat);
}
;
console.log('Total with default vat ' + charge(50));
console.log('Total with specific vat ' + charge(50, 0.15));
