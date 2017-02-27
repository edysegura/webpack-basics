import { map } from 'lodash';

const square = (number) => number * number; 

console.log("------------------ Square ------------------");
console.log(map([1,2,3,4,5,6], square));