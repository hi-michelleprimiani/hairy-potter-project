// define a variable in the module to have the value of the primary key for each piece of pottery.
// it should have an initial value of 1
// define and export a function named makePottery
// the makePottery function must accept the following values as input (it needs parameters)
// i. Shape of the piece of pottery, 2. weight of the piece, 3. height of the piece
// the makePottery function must return an object with the following properties i. shape, 2. weight, 3. height, 4.id (increment this value each time the function is invoked)

let potteryKey = 1;

export const makePottery = (shape, weight, height) => {
  const potteryPiece = {
    shape: shape,
    weight: weight,
    height: height,
    id: potteryKey,
  };
  potteryKey++;
  return potteryPiece;
};
