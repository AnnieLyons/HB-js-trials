"use strict";


/** 1. printIndices */
const printIndices = (items) => {
  for (const idx in items) {
    console.log(items[idx], idx);
  }
};

console.log(printIndices(['apple', 'strawberry', 'cherry']));

/** 2. everyOtherItem */
const everyOtherItem = (items) => {

  const result = [];

  for (const idx in items) {
    if (idx % 2 === 0) {
      result.push(items[idx]);
    }
  }
  
  console.log(result)
};

everyOtherItem(['apple', 'strawberry', 'cherry', 'banana', 'orange']);

// * 3. smallestNItems
const smallestNItems = (items, n ) => {
  const sorted_items = items.sort((a, b) => a - b);


  console.log(sorted_items.slice(0,n));
};

smallestNItems([1, 30, 4, 21, 100000], 3)
