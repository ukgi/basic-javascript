const map1 = new Map([
  ['key1', 'value1'],
  ['key2', 'value2'],
]);
console.log(map1.size);

map1.set('key3', 'value3');
console.log(map1);
console.log(map1.has('key5'));

console.clear();

const lee = { name: 'Lee' };
const kim = { name: 'Kim' };

const map = new Map([
  [lee, 'developer'],
  [kim, 'designer'],
]);

map.forEach((v, k, map) => console.log(v, k, map));
