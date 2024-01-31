function fibonacci(num) {

  let preSet = 0; // first always going to be 0
  let preSet1 = 1; // first term always going to be 1
  let sum = 0; // this witll ne combination of preSet + preSet1

  //
for (let i = 2; i <= num; i++) {
  sum = (preSet + preSet1);
  preSet = preSet1;
  preSet1 = sum;
}
return preSet1
}

console.log(fibonacci(11)); 

module.exports = fibonacci;
