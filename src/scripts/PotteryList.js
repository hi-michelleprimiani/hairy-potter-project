// define and export a PotteryList function
// the PotteryList function must get the items to be sold from the PotteryCatalog module
// the PotteryList function must convert each object in the array to an html rep string

import { usePottery } from "./PotteryCatalog.js";

export const PotteryList = () => {
  let usedPottery = usePottery();
  let HTMLstring = ``;

  for (const items of usedPottery) {
    HTMLstring += `<section class="pottery" id="pottery--${items.id}">
        <h2 class="pottery__shape">${items.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${items.weight} grams and is ${items.height} cm in height
        </div>
        <div class="pottery__price">Price is $${items.price}</div>
      </section>`;
  }
  HTMLstring += ``;
  return HTMLstring;
};
