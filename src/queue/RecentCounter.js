var RecentCounter = function () {
    this.request = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.request.push(t);
    while (this.request[0] < t - 3000) {
        this.request.shift();
    }
    return this.request.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

/*
- 时间复杂度：O(N) N 为 while 循环的次数
- 空间复杂度：O(N) N 为最近请求的次数
*/


