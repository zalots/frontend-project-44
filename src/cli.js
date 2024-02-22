#!/usr/bin/env node

import readlineSync from 'readline-sync';

export const gg = () => {
console.log('brain-games')
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`hello, ${name}!`);
};