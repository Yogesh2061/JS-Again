class Solution {
    firstDigit(num) {
        while(num >= 10) {
            num /= 10;
            num = Math.floor(num); // Ensure num is an integer
        }
        
        return num;
    }
}
console.log(new Solution().firstDigit(234)); // Output: 1