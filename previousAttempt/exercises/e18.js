/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons

  //08/29/23 is when this code was completed, this is a classic case of doing it weird but still getting it correct, please feel free to help me do better in the future, I tried a bunch of things and this is what worked after messing around with it for a few days. Thank you for enduring this torture.
  //get all the discovery years, if it appears more than once increase quantity, it hasn't appeared yet add it to the cart
 
  let getYears = data.asteroids.map(function(asteroid) {
    // return asteroid.discoveryYear;
     return {discoveryYear: asteroid.discoveryYear, quantity: 1};
  })
   console.log("this is all the years: ", getYears);
   console.log("this is all the years: ", getYears.length);
   let grouped = [];
//    variable and map changed to forEach function
   getYears.forEach(function(year) {
    
    console.log("this is year: ", year);
    console.log("this is year.discoveryYear: ", year.discoveryYear);

    //I know this doesn't make sense but it works using the two if it doesn't include the year statements, this does help the quantity get counted.
    if(!grouped.includes(year.discoveryYear)) {
       for(let i = 0; i < grouped.length; i++) {
           console.log("this is grouped[i].discoveryYear: ", grouped[i].discoveryYear, "and this is year.discoveryYear: ", year.discoveryYear);
           if(grouped[i].discoveryYear === year.discoveryYear) {
            grouped[i].quantity += 1;
            console.log("this is grouped[i].quantity: ", grouped[i].quantity);
            }
        }
    }
    if(!grouped.includes(year.discoveryYear)) {
        grouped.push(year);
    }
    return grouped;
 })
 console.log("this is grouped so far: ", grouped);
 console.log("this is grouped so far: ", grouped.length);
    //console.log("this is sameYears: ", sameYears);

 function maxBy(array) {
  // Your code goes here...
  //console.log("starting array: ", array.years.year);
  let returnArray = array[0];
  console.log("returnArray for maxBy at start: ", returnArray);

  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    console.log("this is element: ", element);
    
    if (element.quantity > returnArray.quantity) {
        console.log("this is element: ", element.quantity);
        console.log("this is returnArray: ", returnArray.quantity);
        returnArray = element;
    }
    console.log("this is current returnArray for maxBy: ", returnArray);
  }
  console.log("the last returnArray: ", returnArray);
  return returnArray.discoveryYear;

 }
 console.log("this is grouped: ", grouped);
 console.log("this is the maxBy(grouped): ", maxBy(grouped));
 return maxBy(grouped);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
