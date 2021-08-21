// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const xyzabc = 23;

const x = input => (input > 1 ? true : false);
console.log(xyzabc);

//TODO BUG FIXME

function findTempAmplitudeForDay(readings) {
  let maxTemp = -9999;
  let minTemp = 9999;
  for (const element of readings) {
    if (element > maxTemp && typeof element == "number") {
      maxTemp = element;
    }
    if (element < minTemp && typeof element == "number") {
      minTemp = element;
    }
  }
  return maxTemp - minTemp;
}

const readingSet1 = [3, -2, , -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const readingSet2 = [3, -2, , -10, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const tempAmplitude = findTempAmplitudeForDay(readingSet1.concat(readingSet2));
console.log(tempAmplitude);
