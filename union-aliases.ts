type Combinable = number | string;
type ConversionDescriptor = 'as num' | 'as str';

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === 'number' && typeof input2 === 'number') ||
    resultConversion === 'as num'
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
  // if (resultConversion === 'as num') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, 'as num');
console.log(combinedAges);

const combineStrAges = combine('30', '26', 'as num');
console.log(combineStrAges);

const combinedNames = combine('woochul ', 'soowan', 'as str');
console.log(combinedNames);
