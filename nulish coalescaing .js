//Nulish coalescaling is a feature in JavaScript that allows you to provide a default value for `null` or `undefined` variables. It uses the `??` operator.
// Example of nullish coalescing   
//??
let name = "Hey";
let greeting = "hello "+ (name ?? "guest");
console.log(greeting); // Output: helloHey