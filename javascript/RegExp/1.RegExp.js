const target = 'AA BB 12,345';
let regExp = /[\D,]+/g;

console.log(target.match(regExp));
