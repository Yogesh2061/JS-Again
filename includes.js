// string includes
// let includes = greeting.includes('World');   
// console.log("Does the string include 'World'? " + includes); // Output: Does the string include 'World'? true

let message = "Hello, World! , this is a test string.";
let  check= message.includes("test");
if (check) {
    console.log("The string contains 'test'.");
}   else {
    console.log("The string does not contain 'test'.");
}
// Output: The string contains 'test'.

// slice method
let slicedString = message.slice(0, 5); // Extracts characters from index 0 to 4        
console.log("Sliced string: " + slicedString); // Output: Sliced string: Hello

// slice vs substring difference are    
// The slice method can accept negative indices, which count from the end of the string.
// The substring method does not accept negative indices; it treats them as 0.  for example:
let negativeSlice = message.slice(-6); // Extracts the last 6 characters    
console.log("Negative slice: " + negativeSlice); // Output: Negative slice: string.

// trim method
let whitespaceString = "   Hello, World!   ";   
let trimmedString = whitespaceString.trim(); // Removes leading and trailing whitespace
console.log("Trimmed string: '" + trimmedString + "'"); // Output: Trimmed string: 'Hello, World!'