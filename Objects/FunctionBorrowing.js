const person1 = {
    name: 'John',
    greet() {
        console.log(`Hello, ${this.name}!`);
    }
};

const person2 = {
    name: 'Jane'
};

// Borrowing the greet method from person1
person2.greet = person1.greet;

person1.greet(); // Output: Hello, John!
person2.greet(); // Output: Hello, Jane!