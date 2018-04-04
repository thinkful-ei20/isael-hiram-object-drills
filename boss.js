'use strict';

const arrObjs = [
  { name: 'Hiram', jobTitle: 'Student', boss: 'mike' },
  { name: 'Chloe', jobTitle: 'Person', boss: 'carla' },
  { name: 'Jake', jobTitle: 'Friend', boss: 'will' },
  { name: 'Jordan', jobTitle: 'Cashier', boss: 'bob', },
  { name: 'Jord', jobTitle: 'owner', }
];

arrObjs.forEach( (item) => {
  if(item.boss === undefined){ 
    console.log(`${item.jobTitle} ${item.name} doesn't report to anybody.`);
  }else{
    console.log(`${item.jobTitle} ${item.name} reports to ${item.boss}`);
  }
  
});