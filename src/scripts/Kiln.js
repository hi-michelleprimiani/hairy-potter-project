// define and export a function named firePottery - responsible for acting like a kiln
// the function must accept the following values as input (parameters)
// an object representing a piece of pottery that was made at the wheel in the makePottery function
// a number specifying the firing temperature of the kiln
// the function must add a new property of fired with the value of true to the object
// the function must add a new property of cracked to the object
// if the temp is above 2200 degrees, then cracked property must have a value of true
// if the temp is at or below 2200 then cracked must have a property of false

export const firePottery = (pottery, temp) => {
  pottery.fired = true;
  if (temp > 2200) {
    pottery.cracked = true;
  } else if (temp <= 2200) {
    pottery.cracked = false;
  }
  return pottery;
};
