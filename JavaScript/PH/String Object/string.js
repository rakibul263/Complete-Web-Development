const district = 'Gaibandha';
const zila = "Gaibandha";
const thana = `Palashbari`
const vill = new String('Shubdin');

// typeof 
console.log(typeof district);
console.log(typeof zila);
console.log(typeof thana);
console.log(typeof vill);

console.log();

// console the values
console.log(district);
console.log(zila);
console.log(thana);
console.log(vill);

console.log();

// string is an immutable
console.log(thana[2]);
console.log(thana);
thana[0] = 'B';
console.log(thana);
