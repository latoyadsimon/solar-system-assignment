/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  // Your code goes here...
  console.log("starting array: ", array);
  let returnArray = [array[0]];
  console.log("returnArray for minBy at start: ", returnArray);

  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    console.log("this is element: ", element);
    
    if (cb(element) < cb(returnArray[0])) {
        console.log("this is cb(element): ", cb(element));
        console.log("this is returnArray[0]: ", cb(returnArray[0]));
        returnArray[0] = element;
    }
console.log("this is current returnArray for minBy: ", returnArray);

  
  }
  console.log("the last returnArray: ", returnArray);
return returnArray[0];

}

export function maxBy(array, cb) {
  // Your code goes here...
  console.log("starting array: ", array);
  let returnArray = [array[0]];
  console.log("returnArray for maxBy at start: ", returnArray);

  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    console.log("this is element: ", element);
    
    if (cb(element) > cb(returnArray[0])) {
        console.log("this is cb(element): ", cb(element));
        console.log("this is returnArray[0]: ", cb(returnArray[0]));
        returnArray[0] = element;
    }
console.log("this is current returnArray for maxBy: ", returnArray);

  
  }
  console.log("the last returnArray: ", returnArray);
return returnArray[0];

}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function