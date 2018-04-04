'use strict';
const obj = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
};
function decode(word){
  if(obj.hasOwnProperty(word[0].toLowerCase())){
    return word[obj[word[0].toLowerCase()]];
  }else {
    return ' ';
  }
}
function decodeWords(words){
  let str = words.split(' ');
  let result = '';
  for(let key of str){
    result += decode(key);
  }
  return result;
}
console.log(decodeWords('craft block argon meter bells brown croon droop'));