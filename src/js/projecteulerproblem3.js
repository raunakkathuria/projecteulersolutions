import { profiler } from "./modules/profiler";

/*
https://projecteuler.net/problem=3
----------------------------------

Problem Statement:
    The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?
*/

/*
 * algorithm first calculate all 2 prime factors if any and to shorten the time we
 * divide n/i if i completely divides n so that we don't have to loop n times
 * this significantly reduce the runtime to O(n/i) where i is perfect divisor of n
 *
 * As constants does not matter for time compexity so time complexity will be O(n)
 */
function largestPrimeFactors(n) {
    let largest = 0;

    // print all 2 prime factors
    while ( n % 2 === 0 ){
        largest = 2;
        n /= 2;
    }

    // as all 2's are covered so start with 3 and skip all even
    // numbers hence i += 2
    for (let i = 3; i <= parseInt(Math.sqrt(n)); i += 2) {
        while (n % i === 0) {
            largest = i;
            n /= i;
        }
    }

    // handle in case n is prime number
    if (n > 2) {
        largest = n;
    }

    return largest;
}

var profile = profiler(largestPrimeFactors);
profile.call(null, 600851475143);
