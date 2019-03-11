// Code your solution in this file!
function distanceFromHqInBlocks(block_number) {
  return Math.abs(block_number - 42);
};

function distanceFromHqInFeet(block_number) {
  return distanceFromHqInBlocks(block_number) * 264;
};

function distanceTravelledInFeet(start_block, end_block) {
  return Math.abs(end_block - start_block) * 264;
};

function calculatesFarePrice(start_block, end_block) {
  let distance = distanceTravelledInFeet(start_block, end_block)
  switch (true) {
    case distance <= 400:
      return 0;
    case distance > 2500:
      return 'cannot travel that far';
    case distance > 2000:
      return 25;
    default:
      return (distance - 400) * 0.02;
      break;
  }
};
