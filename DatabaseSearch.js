'use strict';
const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];
function findOne(arr, query){
  return arr.find( obj => {
    for(let key in query){
      if(obj[key] !== query[key]) return false;
    }
    return true;
  }) || null;
}
console.log(findOne(HEROES,  { squad: 'Justice League' }));
