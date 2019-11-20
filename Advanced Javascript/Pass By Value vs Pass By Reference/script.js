// Pass by Value:

var a = 5;
var b = a;

b++;

console.log(a); // 5
console.log(b); // 6

// If we don't wan to modify the original object, we can clone first
let obj = {a: 'a', b: 'b', c: 'c'};
let clone = Object.assign({}, obj);
let clone2 = {...obj}  // -> clone

obj.c = 5;
console.log(clone);   // {a: 'a', b: 'b', c: 'c'}
console.log(obj);     // {a: 'a', b: 'b', c: 5}
console.log(clone2);  // {a: 'a', b: 'b', c: 'c'}


// If object inside an object
let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
let clone3 = Object.assign({}, obj); // -> shallow clone, cannot clone the inner object
let clone4 = {...obj}  // -> shallow clone
let superClone = JSON.parse(JSON.stringify(obj))  // -> deep clone

obj.c.deep = 'haha';
console.log(obj);
console.log(clone3);
console.log(clone4);
console.log(superClone);




// Pass by reference:
// Exp 1:
let obj1 = {name:'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy'

console.log(obj1);  // {name:'Yao', password: 'easypeasy'};
console.log(obj2);  // {name:'Yao', password: 'easypeasy'};

// Exp 2(Array):
var c = [1,2,3,4,5];
var d = c;
d.push(12384123);

console.log(c); //[1,2,3,4,5,12384123]
console.log(d); //[1,2,3,4,5,12384123]

// If we don't want to modify c when we modify d
var c = [1,2,3,4,5];
var d =[].concat(c);
d.push(28312391)
console.log(d)  //[1,2,3,4,5,28312391]
console.log(c)  //[1,2,3,4,5,28312391]

