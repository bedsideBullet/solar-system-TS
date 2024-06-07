// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]): number {
  const yearMap = new Map<number, number>();

  // Count the number of discoveries per year
  for (const asteroid of asteroids) {
    const year = asteroid.discoveryYear;
    if (yearMap.has(year)) {
      yearMap.set(year, yearMap.get(year)! + 1);
    } else {
      yearMap.set(year, 1);
    }
  }

  // Find the year with the greatest number of discoveries
  let maxDiscoveries = 0;
  let maxYear = 0;
  for (const [year, count] of yearMap.entries()) {
    if (count > maxDiscoveries) {
      maxDiscoveries = count;
      maxYear = year;
    }
  }

  return maxYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
