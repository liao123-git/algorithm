const map = new Map();

// 增
map.set('a','aa');
map.set('b','bb');

// 删
map.delete('a');
// map.clear(); 清空

// 改
map.set('b','b1');

// 查
console.log(map.get('a'));

// 时间复杂度都是 O(1)
