//github
// this code is a simple implementation of a function that calculates the longest streak of consecutive numbers in an array
function longestStreak(arr) {
    if (arr.length === 0) return 0;

    // Sort the array to find consecutive numbers
    arr.sort((a, b) => a - b);

    let maxStreak = 1;
    let currentStreak = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1] + 1) {
            currentStreak++;
        } else if (arr[i] !== arr[i - 1]) {
            maxStreak = Math.max(maxStreak, currentStreak);
            currentStreak = 1;
        }
    }

    return Math.max(maxStreak, currentStreak);
}