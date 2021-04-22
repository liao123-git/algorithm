/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    let l = 0;
    let r = 0;
    let res = "";
    const need = new Map();

    for (let i of t)
        need.set(i, need.has(i) ? need.get(i) + 1 : 1);

    let needType = need.size;

    while (r < s.length) {
        const c = s[r];
        if (need.has(c)) {
            need.set(c, need.get(c) - 1);
            if (need.get(c) === 0) needType -= 1;
        }
        while (needType === 0) {
            const c2 = s[l];
            if (need.has(c2)) {
                need.set(c2, need.get(c2) + 1);
                need.get(c2) === 1 && (needType += 1);
            }
            let str = s.slice(l, r + 1);
            if(!res || res.length >= str.length) res = str;
            l++;
        }
        r++;
    }

    return res;
};
/*
- 时间复杂度：O(M+N), M 是 t 的长度, N 是 s 的长度
- 空间复杂度：O(M)
*/
