const stack = [];
// 栈
stack.push(1);
stack.push(2);
// 入栈
const item1 = stack.pop();
const item2 = stack.pop();
// 出栈


/*有效的括号*/
/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function (s) {
    let arr = [];
    let obj = {"(": ")", "[": "]", "{": "}"};

    for (let i = 0; i < s.length; i++) {
        let value = s[i];
        if(value!==" "){
            if(obj[value]){
                arr.push(value);
            }else{
                let top = arr.pop();
                if(value!==obj[top]) return false;
            }
        }
    }
    return !arr.length;
};
console.log(isValid("([]   {})  "));
