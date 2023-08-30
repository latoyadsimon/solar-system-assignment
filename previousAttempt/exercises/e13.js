import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  // Your code goes here...
//   console.log(data.planets);
  const getAvgTemps = data.planets.map(function(planet) {
    return planet.avgTemp;
  });
  console.log("this is getAvgTemps: ", getAvgTemps);
  const avgTempSum = getAvgTemps.reduce(function(acc, currVal) {
    return acc + currVal;
  }, 0);
  console.log("this is avgTempSum: ", avgTempSum);
  console.log("this is the average of the temps: ", avgTempSum / getAvgTemps.length);
  return avgTempSum / getAvgTemps.length;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
