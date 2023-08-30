import { data } from "../data/data";

// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42

export function allPlanetsMoonsCount(data) {
  // Your code goes here...
//   console.log(data.planets);
//   get all the moonCount values and add them
let allMoonCounts = data.planets.map(function(planet) {
    if(!planet.moonsCount) {
        return 0;
    }else{
        return planet.moonsCount;
    }
    
})
console.log("this is allMoonCounts: ", allMoonCounts);
const addedUp = allMoonCounts.reduce(function(acc, currVal) {
    return acc + currVal;
}, 0);
console.log("this is addedUp: ",addedUp);
return addedUp;

}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
