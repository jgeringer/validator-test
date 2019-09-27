// import leftPad from './leftpad';

// const serNos = [6934, 23111, 23114, 1001, 211161];
// const strSNos = serNos.map(sn => leftPad(sn, 8, '0'));
// console.log(strSNos);


import validator from 'validator';
// const validator = require('validator')

console.log(`isEmail - mail@test.org : ${validator.isEmail('mail@test.org')}`);
console.log(`isCurrency - $1.99 : ${validator.isCurrency('$1.99')}`);
