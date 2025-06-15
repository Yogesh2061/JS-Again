// for ... of loops
let message1 = "I am doing js"
for(let char of message1){
    console.log(char)
} 


// Finding the Index of a Character
// You might want to find the position of a character within a string.




let message = "I am still doing js";
for (let i = 0; i < message.length; i++) {
    if (message[i] === 'a') {
        console.log("Index of 'a': " + i);
    }
}
// This loop prints the index each time it encounters 'a'.