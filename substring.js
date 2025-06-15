//substrings
//syntax: str.substring(start, end)
let str="hey there, how are you doing today?";
let substr1=str.substring(5,9); // Extracts characters from index 5 to 8 (end index is included but not the starting index)
let substr2=str.substring(0,3); // Extracts characters from index 0 to 2
console.log(substr1); // Output: "the"
console.log(substr2); // Output: "hey"