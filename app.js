function combine(input1, input2, resultConversion) {
    var result;
    if ((typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as num') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === 'as num') {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
}
var combinedAges = combine(30, 26, 'as num');
console.log(combinedAges);
var combineStrAges = combine('30', '26', 'as num');
console.log(combineStrAges);
var combinedNames = combine('woochul ', 'soowan', 'as str');
console.log(combinedNames);
