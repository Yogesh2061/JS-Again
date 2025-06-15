//Normal Function
function add(x,y){
    return x+y;
}
const added=add(5,10);
console.log(added); // Output: 15

// Arrow Function
const arrowadd=(c,d) => c+d;
const addedarr=arrowadd(7,3);
console.log(addedarr); // Output: 10
// Arrow Function with no parameters
const greet = () => console.log("Hello, World!");       
greet(); // Output: Hello, World!

/**
 * why arrow function over normal function?
 * 1. Conciseness: Arrow functions are shorter and more concise, especially for simple operations.  
 * 2. Lexical `this`: Arrow functions do not have their own `this` context, which means they inherit `this` from the surrounding code. This is particularly useful in callbacks and methods where you want to maintain the context of `this`.
 * 3. No `arguments` object: Arrow functions do not have their own `arguments` object, which can help avoid confusion in some cases.
 * 4. Implicit return: For single-expression arrow functions, you can omit the curly braces and the `return` keyword, making the code cleaner.
// 5. Readability: Arrow functions can improve readability by reducing boilerplate code, especially in functional programming patterns.
// 6. Functional programming: Arrow functions are often used in functional programming paradigms, making it easier to work with higher-order functions like `map`, `filter`, and `reduce`.
// 7. Compatibility: Arrow functions are supported in modern JavaScript environments, making them a good choice for new codebases.
//no need to return and no need to write the name of the function
 */