'use strict';

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' },
    ]
  },
  findOne: function(query) {
    const result = this.store.heroes.find( obj => {
      for(let key in query){
        if(obj[key] !== query[key]) return false;
      }
      return true;
    }) || null;
    console.log(result);
  },
};

Database.findOne({ id: 2 });
/*
this doesnt have a reference point unless it gets invoked
null is a value and undefined is not a value.
find method checks each individual value against test that returns true or false.
*/