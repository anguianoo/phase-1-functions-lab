// Code your solution in this file!

// HQ is on 42th street

// 1 block = 264feet

// For example distanceTravelledInFeet(34, 38) representing 34th St to 38th St, returns 1056 ((38-34)*264)
const hq = 42;

function distanceFromHqInBlocks(street) {
  if (street > hq) {
    return street - hq;
  } else {
    return hq - street;
  }
}

function distanceFromHqInFeet(blocks) {
  let feet = distanceFromHqInBlocks(blocks) * 264;
  return feet;
}

function distanceTravelledInFeet(street1, street2) {
  let distanceTravelled;
  if (street1 < street2) {
    distanceTravelled = street2 - street1;
  } else {
    distanceTravelled = street1 - street2;
  }

  return distanceTravelled * 264;
}

// My solution was not passing the last test

// function calculatesFarePrice(start, destination) {
//   let feet = distanceTravelledInFeet(start, destination);
//   // 1st 400ft are free
//   let totalFeetTravelled = feet - 400;

//   if (totalFeetTravelled <= 0) {
//     totalFeetTravelled = 0;
//   } else if (feet > 2500) {
//     return console.log(`cannot travel that far`);
//   } else if (feet > 2000 && feet < 2500) {
//     return 25;
//   } else {
//     return totalFeetTravelled * 0.02;
//   }
//   return totalFeetTravelled * 0.02;
// }

// SOLUTION from github solution branch

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return 0.02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
