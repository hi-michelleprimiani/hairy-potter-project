// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 5, 3);
console.log(mug);

let plate = makePottery("plate", 8, 1);
console.log(plate);

let bowl = makePottery("bowl", 6, 2);
console.log(bowl);

let vase = makePottery("vase", 4, 7);
console.log(vase);

let teapot = makePottery("teapot", 7, 4);
console.log(teapot);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
