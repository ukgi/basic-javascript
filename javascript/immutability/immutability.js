const user1 = {
  name: 'Lee',
  address: {
    city: 'Seoul',
  },
};

const user2 = {
  ...user1,
  name: 'Kim',
};

Object.freeze(user1);
user1.name = 'Park';
console.log(user1);

console.log(Object.getOwnPropertyNames(user1));
