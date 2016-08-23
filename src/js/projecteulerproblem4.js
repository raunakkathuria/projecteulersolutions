/*
    https://projecteuler.net/problem=4
    ----------------------------------

    Problem Statement:
        A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
        Find the largest palindrome made from the product of two 3-digit numbers.
 */

function isPalindrome(n) {
    let reverse = 0, tmp = n;

    // 117 reverse is
    // 117 % 10 = 7, 117/10 = 11
    // 11 % 10 = 1, 11/10 = 1
    // 711
    while (tmp > 0) {
        reverse = reverse * 10;
        reverse = reverse + tmp%10;
        tmp = parseInt(tmp/10);
    }

    // we can also use inbuild function of js
    // reverse = parseInt(Number(n).toString().split("").reverse().join(""));

    return reverse === n;
}

/*
 * This is normal iterative approach
 *
 * As we loop two times so time complexity is O(999) * O(999)
 * as this is dependent on number of times its looped so in big O notation its
 *
 * O(n*n)
 */
function initialLargestPalindromeThreeDigit() {
    let maxPalindrome = 0;

    // i = 999
    // j = 999, 998, 997 .... 100
    // i = 998
    // j = 998, 997, 996 .... 100
    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            let res = i * j;
            if (isPalindrome(res)) {
                if (res > maxPalindrome) {
                    maxPalindrome = res;
                }
            }
        }
    }

    return maxPalindrome;
}

var profile = profiler(initialLargestPalindromeThreeDigit);
profile.call(null);

/* if we loop as per above function then we will have same number twice
 * for example 99900 when i = 999, j = 100 and also when i = 100, j = 900
 * so we can add a check when j >=i hence it will cut the loop to half
 *
 * so its time will be O(n*n/2) as compared to previous sub
 */
function largestPalindromeThreeDigit() {
    let maxPalindrome = 0;

    // changed check to j >= i
    for (let i = 999; i >= 100; i--) {
        for (let j = 999; j >= i; j--) {
            let res = i * j;
            if (isPalindrome(res)) {
                if (res > maxPalindrome) {
                    maxPalindrome = res;
                }
            }
        }
    }

    return maxPalindrome;
}

profile = profiler(largestPalindromeThreeDigit);
profile.call(null);
