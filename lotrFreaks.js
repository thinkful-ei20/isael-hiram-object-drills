'use strict';

function createCharacter(name, nick, race, origin, atk, def) {
  // Could add weapon prop here and change describe method, but wont
  return {
    name: name,
    nickname: nick,
    race: race,
    origin: origin,
    attack: atk,
    defense: def,
    describe: function() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight: function(chr) {
      const dmgTaken = chr.attack - this.defense <= 0 ? 0 : chr.attack - this.defense;
      const dmgDealt = this.attack - chr.defense <= 0 ? 0 : this.attack - chr.defense;
      return `Your opponent takes ${dmgDealt} damage and you receive ${dmgTaken} damage`;
    },
  };
}

const characters = [
  createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  createCharacter('Legolas','legolas','Elf', 'Woodland Realm', 8, 5)
];

characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9001, 0));

characters.find((ch) => ch.nickname === 'aragorn').describe();
const hobbits = characters.filter((ch) => ch.race === 'hobbit');
const strong = characters.filter((ch) => ch.attack > 5);

hobbits.forEach((hobbit) => hobbit.describe());
strong.forEach((str) => str.describe());