let mySet = new Set();

mySet.add(1);
mySet.add(5);
mySet.add(5);
let o = {a: 1, b: 2};
mySet.add(o);
console.log(mySet, mySet.size);

console.log(mySet.has(5));

mySet.delete(5);
console.log(mySet, mySet.size);

// 迭代 Set
for (let item of mySet) console.log(item);

const myArr = [...mySet];
const myArr2 = Array.from(mySet);

const mySet2 = new Set([1,2,3,4]);

const intersection = new Set([...mySet].filter(n => mySet2.has(n)));
console.log(intersection);

const difference = new Set([...mySet].filter(n => !mySet2.has(n)));
console.log(difference);
