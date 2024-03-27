#!/usr/bin/env node
console.log("Test Command");
const world = 'world';

export function hello(who: string = world): string {
    console.log(`Hello ${who}! `);
    return `Hello ${who}! `;
}