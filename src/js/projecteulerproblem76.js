import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=76
    ----------------------------------
    Counting summations

    Problem Statement:
    It is possible to write five as a sum in exactly six different ways:

        4 + 1
        3 + 2
        3 + 1 + 1
        2 + 2 + 1
        2 + 1 + 1 + 1
        1 + 1 + 1 + 1 + 1
    How many different ways can one hundred be written as a sum of at least two positive integers?
*/

/*
 * This problem is similar to problem31, instead of coins we have
 * numbers till 100 as selection criteria to find combinations
 * please refer src/js/projecteulerproblem31.js for more details
 */
function countingSummations(target) {
    let numWays = new Array(target+1).fill(0);
    numWays[0] = 1;

    for (let i = 1; i <= 99; i++) {
        for (let j = i; j <= target; j++) {
            numWays[j] += numWays[j - i];
        }
    }

    return numWays[target];
}

var profile = profiler(countingSummations);
profile.call(null, 100);

