//Object can also contain functions known as methods
const person = {
    firstName: "John",
    age: 30,
    func: function() {
        return "Hello, my name is " + this.firstName;
    },
    functionwithconsolelog: function()  {
        console.log("This is a function with console log");
    }
};
console.log(person);
console.log(person.func()); // This will throw an error because firstName is not defined in the function scope
// The above code will not throw an error, but it will not return the expected value because 'this' refers to the global object in non-strict mode.
// To fix this, we can use an arrow function or bind 'this' to the function 
const personWithArrowFunc = {
    firstName: "John",
    age: 30,
    func: () => {
        return "Hello, my name is " + personWithArrowFunc.firstName;
    }
};

person.functionwithconsolelog(); // This will log the message to the console


