
'use strict';
function Character(name, nickname, race, origin, attack, defense, weapon){ //created a constructor function to create the characters
  this.name = name;
  this.nickname = nickname;
  this.race = race;
  this.origin = origin;
  this.attack = attack;
  this.defense = defense;
  this.weapon = weapon;
}

Character.prototype.describe = function(){// created a prototype method for describing the characters
  return `${this.name} is a ${this.race} from ${this.origin} who uses ${this.weapon}`;
};

Character.prototype.evaluateFight = function(character){// created a prototype method to evaluate the fight
  let attackResult = this.attack - character.defense > 0 ? this.attack - character.defense : 0; // if the characters attack is greater than the enemies defense
  let defenseResult = character.attack - this.defense > 0 ? character.attack - this.defense : 0;// if the enemies attack is greater than the your defense
  return `Your opponent takes ${attackResult} and you receive ${defenseResult} damage`;
};

const characters = [
  new Character('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'),//created array of character objects
  new Character('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  new Character('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'String and Barrow Blade'),
  new Character('Aragorn son of Arathorn', 'aragorn', 'man', 'dunnedain', 3, 2, 'Anduril'),
  new Character('legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow'),
  new Character('Arwen', 'Undomiel', 'Half-Elf', 'Rivendell', 8999, -9000, 'Hadhafang')
];

console.log(characters.find(e => {// finds the name and returns the describe
  if(e.nickname === 'aragorn'){
    return true;
  }
}).describe());
console.log(characters.filter(e => {
  return e.race === 'Hobbit';//filters to only show the hobbit chracters
}));
console.log(characters.filter(e => {
  return e.attack > 5;// filters for attacks higher than 5
}));