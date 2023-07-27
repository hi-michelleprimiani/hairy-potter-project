// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js";
import { PotteryList } from "./PotteryList.js";

// Make 5 pieces of pottery at the wheel
const mug = makePottery("mug", 5, 3);
const plate = makePottery("plate", 8, 1);
const bowl = makePottery("bowl", 6, 2);
const vase = makePottery("vase", 4, 7);
const teapot = makePottery("teapot", 7, 4);

// Fire each piece of pottery in the kiln

firePottery(mug, 2199);
firePottery(plate, 3333);
firePottery(bowl, 1000);
firePottery(vase, 1111);
firePottery(teapot, 3333);

// Determine which ones should be sold, and their price

toSellOrNotToSell(mug);
console.log(mug);
toSellOrNotToSell(plate);
toSellOrNotToSell(bowl);
toSellOrNotToSell(vase);
toSellOrNotToSell(teapot);
// Invoke the component function that renders the HTML list

let potteryCatalog = usePottery();

const parentHTML = document.querySelector(".potteryList");
parentHTML.innerHTML = PotteryList(potteryCatalog);
