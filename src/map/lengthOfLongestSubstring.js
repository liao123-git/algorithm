/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let map = new Map();
    let p1 = 0;
    let p2 = 0;
    let res = 0;

    while (p1 < s.length) {
        let now = s[p2++];
        let has = map.has(now);

        if (!has) {
            res = Math.max(res, s.slice(p1, p2).length);
            map.set(now, true);
        }

        if (p2 >= s.length || has) {
            map.clear();
            p1++;
            p2 = p1;
        }
    }

    return res;
};


var lengthOfLongestSubstring2 = function (s) {
    let l = 0;
    let res = 0;
    const map = new Map();

    for (let r = 0; r < s.length; r++) {
        if (map.has(s[r]) && map.get(s[r]) >= l) {
            l = map.get(s[r]) + 1;
        }
        res = Math.max(res, r - l + 1);
        map.set(s[r], r);
    }

    return res;
};

