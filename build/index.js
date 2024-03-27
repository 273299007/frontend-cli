#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
console.log("Awesome Command");
const world = 'world';
function hello(who = world) {
    console.log(`Hello ${who}! `);
    return `Hello ${who}! `;
}
exports.hello = hello;
