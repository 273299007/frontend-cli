#!/usr/bin/env node
console.log("Starting  frontend-cli");
const world = 'world';
export function hello(who = world) {
    console.log(`Hello ${who}! `);
    return `Hello ${who}! `;
}
console.log("End of  frontend-cli");
