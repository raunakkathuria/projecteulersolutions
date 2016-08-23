import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=1
    ----------------------------------

    Problem Statement:
        If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
        The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */


/*
 * this is normal looping based on input provided so time will increase linearly depending on input
 * as size of input increases time to calculate will increase
 *
 * Time complexity: O(n)
 */
function linearWay(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }
    return sum;
}

var profile = profiler(linearWay);
profile.call(null, 1000);

/*
 * this I learned later by looking on how to optimize it with the help of their suggestion, implemented
 * it just for learning it, got to learn gauss formula :)
 *
 * linearWay can have issues if n is very large, we can also solve it by making use of Gauss formula
 * i.e calculate sum individually for 3, 5, 15 using gauss formula, this way we can get rid of
 * looping through input
 *
 * Gauss formula to calculate sum all numbers till num is (num * (num + 1))/2
 *
 * with this way we have made this function independent of size of input
 *
 * Time complexity: O(1)
 */
function sumDivisibleBy(num, n) {
    if (Number.isInteger(num) && Number.isInteger(n)) {
        let p = parseInt(num/n);
        return parseInt(n * (p * (p + 1)) / 2);
    }
    return 0;
}

function calculateSumGaussWay(num) {
    return sumDivisibleBy(num, 3) + sumDivisibleBy(num, 5) - sumDivisibleBy(num, 15);
}

profile = profiler(calculateSumGaussWay);
profile.call(null, 999);
