import { Singleton } from "./singleton";

console.log('start');
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();
if (obj1 === obj2) { console.log('1と2は同じインスタンス'); }
console.log('end');
