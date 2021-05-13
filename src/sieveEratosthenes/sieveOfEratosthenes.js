/**
 * @param {number} maxNumber
 * @return {number[]}
 */
var sieveOfEratosthenes = function sieveOfEratosthenes(maxNumber) {
    let primes = [];
    let is_primes = new Array(maxNumber + 1).fill(true);
    is_primes[0] = false;
    is_primes[1] = false;

    for (let number = 2; number <= maxNumber; number += 1) {
        if (is_primes[number] === true) {

            let index = 1;

            while (++index * number <= maxNumber) {
                is_primes[index * number] = false;
            }

            primes.push(number);
        }
    }

    return primes;
};
/*
* - 时间复杂度：O(N log N)
* - 空间复杂度：O(N)
* */
