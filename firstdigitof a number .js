class Solution {
    firstDigit(num) {
        while(num >= 10) {
            num /= 10;
            num = Math.floor(num);
        }
        
        return num;
    }
}
console.log(new Solution().firstDigit(234)); // Output: 1