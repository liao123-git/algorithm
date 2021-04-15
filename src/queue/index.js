const queue = [];

queue.push(1);
queue.push(2);
queue.shift();

setTimeout(() => console.log(1), 0);
console.log(2);
