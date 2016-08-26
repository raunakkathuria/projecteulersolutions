import { profiler } from "./modules/profiler";

/*
    https://projecteuler.net/problem=18
    -----------------------------------
    Maximum path sum I

    Problem Statement:
    By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.

           3
          7 4
         2 4 6
        8 5 9 3

    Find the maximum total from top to bottom of the triangle below:
        75
        95 64
        17 47 82
        18 35 87 10
        20 4 82 47 65
        19 1 23 75 3 34
        88 2 77 73 7 63 67
        99 65 4 28 6 16 70 92
        41 41 26 56 83 40 80 70 33
        41 48 72 33 47 32 37 16 94 29
        53 71 44 65 25 43 91 52 97 51 14
        70 11 33 28 77 73 17 78 39 68 17 57
        91 71 52 38 17 14 91 43 58 50 27 29 48
        63 66 4 68 89 53 67 30 73 16 69 87 40 31
        4 62 98 27 23 9 70 98 73 93 38 53 60 4 23
*/

// constructing input as array
let inputArr = [
    [75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [95, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [17, 47, 82, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [18, 35, 87, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [20, 4, 82, 47, 65, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [19, 1, 23, 75, 3, 34, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [88, 2, 77, 73, 7, 63, 67, 0, 0, 0, 0, 0, 0, 0, 0],
    [99, 65, 4, 28, 6, 16, 70, 92, 0, 0, 0, 0, 0, 0, 0],
    [41, 41, 26, 56, 83, 40, 80, 70, 33, 0, 0, 0, 0, 0, 0],
    [41, 48, 72, 33, 47, 32, 37, 16, 94, 29, 0, 0, 0, 0, 0],
    [53, 71, 44, 65, 25, 43, 91, 52, 97, 51, 14, 0, 0, 0, 0],
    [70, 11, 33, 28, 77, 73, 17, 78, 39, 68, 17, 57, 0, 0, 0],
    [91, 71, 52, 38, 17, 14, 91, 43, 58, 50, 27, 29, 48, 0,  0],
    [63, 66, 4, 68, 89, 53, 67, 30, 73, 16, 69, 87, 40, 31, 0],
    [4, 62, 98, 27, 23, 9, 70, 98, 73, 93, 38, 53, 60, 4, 23]
];

/*
 * To solve this we need to understand from smaller set, consider this
           3
          7 4
         2 4 6
        8 5 9 3
 *
 * we start from bottom layer
         2 4 6
        8 5 9 3
 * for 2 we need to find node value + Max(left, right)
 * and then replace value of two with this
 *
 * so
 * 2 + Max(8, 5) = 2 + 8 = 10
 * 4 + Max(5, 9) = 4 + 9 = 13
 * 6 + Max(9, 3) = 6 + 9 = 15
 * and so on
 */
function maximumPathSum(inputArr) {
    // start top bottom
    let len = inputArr.length;

    for (let i = len - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            inputArr[i][j] += Math.max(inputArr[i+1][j], inputArr[i+1][j+1])
        }
    }

    return inputArr[0][0];
}

var profile = profiler(maximumPathSum);
profile.call(null, inputArr);
