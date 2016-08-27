import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=31
    ----------------------------------
    Coin sums

    Problem Statement:
    In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
        1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).

    It is possible to make £2 in the following way:
        1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p

    How many different ways can £2 be made using any number of coins?
*/

/*
 * Consider you have only 1p coins and you need to pay 5p so possible way is
 * 1 + 1 + 1 + 1 + 1 = 5p
 * now if we have 2p also in addition to 1p then possible combinations are
 * 1 + 2 + 2
 * 1 + 1 + 1 + 2
 * so total combinations would be
 * combination with 1p + combination with 2p = 1 + 2 = 3
 */
function coinSumCombinations(target, coins = [1, 2, 5, 10, 20, 50, 100, 200]) {
    // calculate array for number of ways using target + 1 as size, as we need
    // to consider 0 and 200 as well
    let numWays = new Array(target+1).fill(0);
    // when you are left to give 0p there is only one way i.e to not pay hence
    numWays[0] = 1;

    for (let i = 0; i < coins.length; i++) {
        // for each coin, store number of combinations possible only with that coin and for next
        // coin add toprevious coin combinations
        for (let j = coins[i]; j <= target; j++) {
            numWays[j] += numWays[j - coins[i]];
        }
    }

    return numWays[target];
}

var profile = profiler(coinSumCombinations);
profile.call(null, 200);
