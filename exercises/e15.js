import { data } from "../data/data";

// SPACE DATA EXERCISE 15
// Return an array of Planets' names without moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetsWithNoMoons(data) {
  // Your code goes here...
//   console.log(data.planets);
  return data.planets.filter(function(planet) {
    if(!planet.moons) {
        // console.log(planet.name);
        return planet.name;
    }
  }).map(function(value) {
    console.log(value.name);
    return value.name;
  })
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
