const obj = {};
// obj -> Object.prototype -> null
const func = () => {
};
// func -> Function.prototype -> Object.prototype -> null
const arr = [];
// arr -> Array.prototype -> Object.prototype -> null

Object.prototype.x = 123;
console.log(obj.x);


// 第一题
const myInstanceof = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) return true;
        p = p.__proto__;
    }
    return false;
};

// 第二题
let foo = {},
    F = () => {
    };

Object.prototype.a = "value a";
Function.prototype.b = "value b";

console.log(foo.a);
console.log(foo.b);

console.log(F.a);
console.log(F.b);


// 编写一个 instanceOf 方法，可以判断一个变量是否是另一个变量的实例。
let test = function () {
    this.name = 123;
};
let test2 = function () {
    this.name = 321;
};
let test3 = new test();
const instanceOf = (A, B) => {
    let p = A;
    while (p) {
        if (p === B.prototype) return true;
        p = p.__proto__;
    }
    return false;
};
console.log(instanceOf(test3, test));

let arr1 = [1,2,3,4,5,6,7];
let arr2 = [8,9,10,11,12];
let arr3 = [];

arr1.forEach(item=>{
    arr3.push(item);
    arr2.length && arr3.push(arr2.shift());
});

arr2.length && arr3.push(...arr2);
console.log(arr3);
