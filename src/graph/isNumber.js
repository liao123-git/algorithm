/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    const graph = {
        0: {".": 2, "sign": 1, 'digit': 6},
        1: {".": 2, 'digit': 6},
        2: {'digit': 3},
        3: {"E": 4, "e": 4, 'digit': 3},
        4: {"sign": 7, 'digit': 5},
        5: {'digit': 5},
        6: {".": 3, "E": 4, "e": 4, 'digit': 6},
        7: {'digit': 5},
    };

    let res = 0;
    for (let str of s.trim()) {
        let key = str;
        if (str >= 0 && str <= 9){
            key = 'digit';
        } else if (str === "+" || str === "-"){
            key = 'sign';
        }

        res = graph[res][key];
        if (!res) return false;
    }
    return res === 3 || res === 5 || res === 6;
};
// ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"].forEach(item => console.log(isNumber(item)));
/*
- 时间复杂图：O(N)
- 空间复杂图：O(1)
*/
