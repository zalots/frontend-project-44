#!/usr/bin/env node
import readlineSync from 'readline-sync';
console.log('welcome to ther brain-games');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);