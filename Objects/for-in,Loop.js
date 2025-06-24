// The in Operator
// The in operator is used to check if a specified property exists in an object. It returns true if the property is found and false if it is not.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30
};
let checkAge= 'age' in person;
console.log(checkAge); // Output: true. 
const checkSex='Sex' in person;
console.log(checkSex); // Output: false.


/* Looping Through an Object with for...in
 The for...in loop allows you to iterate over the enumerable properties of an object. During each iteration,
  the loop assigns the current property name to a variable,
  which can then be used to access the property's value.
  */
  
  for(let key in person){
    console.log("The " + `${key}` + " is " + `${person[key]}`)
  }
//   You are getting undefined because person.key tries to access a property literally named "key" on the person object,
//  but you should use person[key] to access the value of the property whose name is stored in the variable key. (source:copilot)



// Made changes.
for(let key in person){
    console.log("The " + `${key}` + " is " + `${person[key]}`)
  }