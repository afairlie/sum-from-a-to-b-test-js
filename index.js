// REFACTORED SOLUTION

function sum(fromN, toN) {
  return fromN === toN ? fromN
    : toN <= 1 ? fromN + 1
    : sum(fromN + (toN - 1), (toN - 1));
}

// ORIGINAL SOLUTION

function sumOriginal(fromN, toN){
  if (fromN === toN) {
    return fromN;
  } else if (toN === 1) {
    return fromN + 1;
  } else if (toN <= 0) {
    return fromN + 1;
  } else {
    // fromN is counting up, toN is counting down, adding them together.
    return sumOriginal(fromN + (toN - 1), (toN - 1));
  }
}

console.log(sumOriginal(3, 7));

// (3 + 6 = 9), (6 - 1 = 5);
// (9 + 5 = 14), (5 - 1 = 4);
// (14 + 4 = 18), (4 - 1 = 3);
// (18 + 3 = 21), (3 - 1 = 2);
// (21 + 2 = 23), (2 - 1 = 1);
// (23 + 1 = 24), (1 - 1 = 0);



module.exports = sum;

// if (fromN >= toN) {
//   return fromN;
// } else {
//   sum(fromN + (fromN + 1));
// }

// function sum(fromN, toN) {
//   let count = 0;
//   // Sum all the values from fromN up to toN
//   if (fromN === toN) {
//     return fromN;
//   } else if (count <= toN) {
//     count += 1;
//     return sum((fromN + (fromN + 1)), toN);
//   }
