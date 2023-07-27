// define and export a PotteryList function
// the PotteryList function must get the items to be sold from the PotteryCatalog module
// the PotteryList function must convert each object in the array to an html rep string

import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
  let usedPottery = usePottery();
  let HTMLstring = `<article class="potteryCatalog">`;

  for (const items of usedPottery) {
    HTMLstring += `<section class="pottery" id="pottery--1">
        <h2 class="pottery__shape">${items.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${items.weight} and is ${items.height} in height
        </div>
        <div class="pottery__price">Price is ${items.price}</div>
      </section>`;
  }
  HTMLstring += `</article>`;
  return HTMLstring;
};
