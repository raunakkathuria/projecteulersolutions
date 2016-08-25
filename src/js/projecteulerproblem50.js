import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=50
    ----------------------------------
    Consecutive prime sum

    Problem Statement:
        The prime 41, can be written as the sum of six consecutive primes:
            41 = 2 + 3 + 5 + 7 + 11 + 13
        The prime factors of 13195 are 5, 7, 13 and 29. What is the largest prime factor of the number 600851475143?
        Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

// function to check if number is prime or not
function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

/*
 * We can solve this problem with logic specified below
 *
 * consider following sequence of prime number till 41
 *
 * 2 3  5  7 11 13 17 19 23 29 31 37 41
 *
 * their cumulative sum, we need to check till 100 as we can not go beyond input limit
 * in this case it its 100
 * 2 5 10 17 28 41 58 77 100
 *
 * so we need to check if sum is prime and find prime numbers below that for example sum 41
 * match with 13 prime factor so we need to find prime numbers below 13 inclusive of 13
 *
 * so as first step of program start iterating from i > 0 - i <= 100 to find all prime numbers below 100
 * with each iteration check if current i is prime, if prime then find all prime numbers below i
 * and keep track of maxPrime and maxLength of prime
 *
 * in next iteration check if that exceeds maxLength and maxPrime, if yes we have new maxPrime and maxLength
 * this loop continue till we exhaust all options
 */
function calculateMaxPrime(max) {

    let maxPrime = 0,
        maxLength = 0;

    // loop till max,
    // check if maxPrime found plus current number is not greater than max
    for (let i = 0; i + maxPrime < max; i++) {

        // only check for prime
        if (!isPrime(i)) {
            continue;
        }

        // count keeps track of prime numbers
        let sum = i;
        let count = 1;

        // if prime number is found then loop all number below that to
        // find prime numbers
        for (let j = i - 1; j > 0; j--) {

            // keep looking for prime numbers
            if (!isPrime(j)) {
                continue;
            }

            // add that prime number to sum
            sum += j;

            // break if sum of current prime number takes it beyond max
            if (sum >= max) {
                break;
            }

            // add prime factor to count
            count++;

            if (count < maxLength) {
                continue;
            }

            // need to check if sum is also prime then only assign
            // maxPrime and maxLength
            if (isPrime(sum)) {
                maxLength = count;
                maxPrime = sum;
            }
        }
    }

    return maxPrime;
}

var profile = profiler(calculateMaxPrime);
profile.call(null, 1000000);
