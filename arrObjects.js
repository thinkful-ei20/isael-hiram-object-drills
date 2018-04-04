'use strict';

const arrObjs = [
  { name: 'Hiram', jobTitle: 'Student', },
  {name: 'Chloe', jobTitle: 'Person', },
  { name: 'Jake', jobTitle: 'Friend', },
  { name: 'Jordan', jobTitle: 'Cashier', }
];

arrObjs.forEach((item) => console.log(`${item.name}: ${item.jobTitle}`));