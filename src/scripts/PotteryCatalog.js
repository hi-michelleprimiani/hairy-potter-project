// define a variable in the module with a value of an empty array. This array will store pottery that will be sold
// define and export a function named toSellorNotToSell that is responsible for determining if a piece of pottery should be sold
// the function must accept a pottery object as input
// if the weight of the piece of pottery is greater than or = to s6, then the function must add a price property with a value of 40
// if the weight of the piece of pottery is less than 6 then the function must add a price property with the value of 20
// if the piece of pottery is cracked, do not add a price property to it
// if the pottery is not cracked, add the object to the array of items to be sold

let soldPottery = [];

export const toSellOrNotToSell = (pottery) => {
  if (pottery.weight >= 6 && pottery.cracked === false) {
    pottery.price = 40;
    soldPottery.push(pottery);
  } else if (pottery.weight < 6 && pottery.cracked === false) {
    pottery.price = 20;
    soldPottery.push(pottery);
  }
  return pottery;
};

export const usePottery = () => {
  return soldPottery;
};

// export const toSellOrNotToSell = (pottery) => {
//   if (pottery.cracked === false) {
//     if (pottery.weight >= 6) {
//       pottery.price = 40
//     } else {
//       pottery.price = 20;
//     }
//     soldPottery.push(pottery)
//   }
//   return pottery
// }
