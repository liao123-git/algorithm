/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    let map = new Map();
    map.set('(', ')');
    map.set('[', ']');
    map.set('{', '}');

    for (let i = 0; i < s.length; i++) {
        let value = s[i];
        if (map.get(value)) {
            arr.push(map.get(value));
        } else {
            let first = arr.shift();
            if (first !== value) return false;
        }
    }

    return !arr.length;
};

/*
- 时间复杂度：O(N)
- 空间复杂度：O(N)
*/
