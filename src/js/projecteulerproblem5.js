import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=5
    ----------------------------------
    Smallest multiple

    Problem Statement:
        2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
        What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

/*
 * calculate greatest common divisor, we will need this to caluclate lowest common multiple
 * as lcm(a, b) = a * b / gcd(a, b);
 */
function gcd(a, b) {
    if (a === 0) {
        return b;
    }
    if (b === 0) {
        return a;
    }
    if (a === b) {
        return a;
    }

    let factor = 0;
    while (a % 2 === 0 && b % 2 === 0) {
        a /= 2;
        b /= 2;
        factor += 1;
    }

    while (a != b) {
        if(a % 2 === 0) {
            a /= 2;
        } else if(b % 2 === 0) {
            b /= 2;
        } else if(a > b) {
            a = (a - b)/2;
        } else {
            b = (b - a)/2;
        }
    }

    return a *  Math.pow(2, factor);
}

function lcm(a, b) {
    return parseInt( (a*b)/gcd(a, b) );
}

/*
 * As we traverse whole input so its time complexity is linear to size of input
 * so its O(n)
 *
 * for this problem we can start with 10 as its given 2520 is lowest multiple for
 * first 10 numbers to reduce time, but i have created it as generic one.
 */
function smallestPossibleDivisible(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = lcm(result, i);
    }
    return result;
}

var profile = profiler(smallestPossibleDivisible);
profile.call(null, 20);
