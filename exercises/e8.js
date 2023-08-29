import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  // Your code goes here...
//get only the planets that have moons, cycle through the moons and return the one with the moonName
// return data.planets
const foundPlanet =  data.planets
    .find(function(planet) {
        // console.log("this is just planet.moons: ", planet.moons);
        if(planet.moons) {
            if (planet.moons.includes(moonName)) {
                console.log("this is planet: ", planet.name, " and this is moonName: ", moonName);
                console.log("this is planet name in return:", planet.name);
                return planet.name;
            }
        }
    });
    console.log("this is foundPlanet", foundPlanet.name);
    return foundPlanet.name;
    
}
    









//   return  data.planets

//     .filter(function(planet) {
        // return planet.moons.find(function(moon) {
    //     const findMoon =  planet.moons.find(function(moon) {
    //         if(moon === moonName) {
    //             console.log("this is planet: ", planet.name, ", this is moon: ", moon, " and this is moonName: ", moonName);
    //             return planet.name;
    //         }
            
    //     })
      
        
    // })

    
    //console.log("this is getPlanet: ", getPlanet);
    //return getPlanet;
    

    // .find(function(value) {
    //     console.log("this is the value: ", value.moons);
    //     const allMoons = value.moons;
    //     console.log("this is allMoons: ", allMoons);
    //     return allMoons
    //     });

//  return getAllMoons.moons.find(function(moon) {
//     console.log("moon: ", moon);
//     console.log("this is moonName: ", moonName);
//     if(moon === moonName) {
//         console.log("correct moon: ", moon);
//         console.log("planet's name: ", planet.name);
//         return planet.name;
 
//     }
   
//  })
    

    
  

//}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
