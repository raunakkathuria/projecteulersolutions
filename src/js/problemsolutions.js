(function () {

/*
    function to calculate the time taken to execute a function,
    created as a wrapper for function calls
 */
    function profiler(func) {
        return function() {
            let start = performance.now(),
                // as I am not passing arguments so using it directly
                // else use it like this let args = Array.from(arguments))
                returnVal = func.apply(this, arguments),
                end = performance.now(),
                duration = Number(end - start).toFixed(4),
                funcName = func.name;

            console.log(`== Time take for ${funcName} was ${duration} ms`);
            return returnVal;
        };
    }

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
     * O(n)
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
    console.log("Problem1(https://projecteuler.net/problem=1): linear result for 1000", profile.call(null, 1000));
    console.log("Problem1(https://projecteuler.net/problem=1): linear result for 10000", profile.call(null, 10000));
    console.log("Problem1(https://projecteuler.net/problem=1): linear result for 1000000", profile.call(null, 1000000));

    /*
     * linearWay can have issues if n is very large, we can also solve it by making use of Gauss formula
     * i.e calculate sum individually for 3, 5, 15 using gauss formula, this way we can get rid of
     * looping through input
     *
     * Gauss formula to calculate sum all numbers till num is (num * (num + 1))/2
     *
     * with this way we have made this function independent of size of input
     *
     * O(1)
     */
    function sumDivisibleBy (num, n) {
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
    console.log("Problem1(https://projecteuler.net/problem=1): gauss way result for 1000", profile.call(null, 999));
    console.log("Problem1(https://projecteuler.net/problem=1): gauss way result for 10000", profile.call(null, 9999));
    console.log("Problem1(https://projecteuler.net/problem=1): gauss way result for 1000000", profile.call(null, 999999));
})();


