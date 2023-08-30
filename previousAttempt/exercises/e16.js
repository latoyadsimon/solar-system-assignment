/**
 * Make sure to read the e16.md file!
 * For this exercise we want you to make a custom `find` method. 
 * In order to do this it is ok to use any type of FOR loops.
 * REQUIREMENT: A find function should
 * * Take an array of things
 * * Return a the first thing where the applied callback is truthey
 * The function MUST NOT use the find() method.
 */


export function find(array, callback) {
  // Your code goes here...
  console.log("this is the array", array);
  console.log("this is the callback: ", callback);

  let returnArray = [];

  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    if (callback(element)) {
      returnArray.push(element);
    }

  }
console.log("this is returnArray: ", returnArray);
console.log("this is the first answer returned: ", returnArray[0]);
  return returnArray[0];

  
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function