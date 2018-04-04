'use strict';
const obj = {
  foo: 1,
  bar: 2,
  fum: 3,
  quix: 4,
  spam: 5
};
for(let key in obj){
  console.log(`${key}: ${obj[key]}`);
}