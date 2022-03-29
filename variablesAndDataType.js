var a = 1;
let b = 2;
const c = 3;
let d;


console.log("before change", a, b, c,d);

a = 4;
b = 5;
d = 5;
//c = 6;

console.log("after change", a, b, c,d);

a = "Im string";
console.log(a, typeof a);

a = 23;
console.log(a, typeof a);

a = 23.45;
console.log(a, typeof a);

a = { name: "Darwin", college: "St.Xavier's" };
console.log(a, typeof a);
console.log(a.name);

a = [1, 2, 3, "a", "b", "c"];
console.log(a);
console.log(a[0]);
