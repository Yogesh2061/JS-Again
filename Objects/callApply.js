const user1 = {
    name: 'manish',
    age: 25,
};

const user2 = {
    name: 'Kushal',
    age: 30,
};

const user3 = {
    name: 'Sashi',
    age: 35,
};

function sayHi() {
    console.log(`Hi, my name is ${this.name}.`);
}

// Borrowing the sayHi function
sayHi.call(user1); // Output: Hi, my name is Prakash.//sayhi fn user 1 vitra gayera call vayo
sayHi.call(user2); // Output: Hi, my name is Ashish.
sayHi.call(user3); // Output: Hi, my name is Suresh.

// Using apply with arguments
function introduce(degree, year) {
    console.log(`${this.name}, Degree: ${degree}, Year: ${year}`);
}

introduce.apply(user1, ['BE', 2015]); // Output: manish, Degree: BE, Year: 2015
introduce.apply(user2, ['BE', 2018]); // Output: kushal, Degree: BE, Year: 2018