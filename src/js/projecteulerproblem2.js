import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=2
    ----------------------------------

    Problem Statement:
        Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
            1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
        By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
 */

/*
 * as limit is defined so no need to pass any number for fibonacci, we will terminate based on limit 4000000
 * as we are looping so it will have linear time complexity so it will be
 *
 * Time complexity: O(n) - increases with size of input
 */
function fibonacciLinear(limit) {
    let a = 1,
        b = 0,
        sum = 0;

    while (a < limit) {
        // with es6 destructor no need to create temporary variable
        [a, b] = [b + a, a];

        // check if its even
        if (a % 2 === 0) {
            sum += a;
        }
    }

    return sum;
}

profile = profiler(fibonacciLinear);
profile.call(null, 4000000);

/*
 * while analyzing the fibonacci series I came to realize one pattern for even that every third number is even
 * i never noticed it (eureka feeling :))
 * so with this function we can eliminate looping through all elements to check if they are even or not hence time
 * will reduce accordingly like O(n/3) as compared to previous one
 *
 * Time Complexity: O(n/3) but big O notation is O(n) as we don't care about constant
 */
function fibonacciEfficient(limit) {
    let a = 1,
        b = 1, // assigning b so that series start with 1, 1 to be consistent
        c = a + b, // 2
        sum = 0;

    while (c < limit) {
        sum += c;
        // for next loop 3 5 8 so a will be 3, b will be 5 and c will be 8
        a = b + c; // 1 + 2
        b = a + c; // 3 + 2
        c = a + b; // 3 + 5
    }
    return sum
}

profile = profiler(fibonacciEfficient);
profile.call(null, 4000000);
