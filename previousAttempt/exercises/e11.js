import { data } from "../data/data";

// SPACE DATA EXERCISE 11
// Return an array of Planets' names with less than 10 moons
// include planets with 0 moons
// Return example: ['name1', 'name2', ... , 'nameN']

export function lowMoonsPlanets(data) {
  // Your code goes here...
//   console.log(data.planets);
 const getMoonCount =  data.planets.filter(function(planet){
    if(planet.moonsCount < 10  || !planet.moonsCount) {
        // console.log(planet.moonsCount);
        console.log(planet.name);
        return planet.name;
        //this part of the function still returns full objects
    }
      
  })
  console.log("this is getMoonCount: ", getMoonCount);
//   map through and get the name of each object
 return getMoonCount.map(function(planet) {
     console.log(planet.name);
    return planet.name;
 })
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
