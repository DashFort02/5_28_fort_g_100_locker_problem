//fort_g 5_28 100 locker problem:
//https://www.popularmechanics.com/science/math/a31155135/solution-riddle-locker-prank/

//starts with 100 closed lockers
var list = [-1]; // (-1) is Open, (1) is closed
var valueListI = -5; // the original value of a location
var k = -5;
var i;
var b = 0; // counter of number of many black tiles in "checkCorrect"


// make 100 lockers
for (i = 0; i <= 99; i++) {
  list[i] = 1; 
}
// count up and shut/close on that interval
for (j = 1; j <= 100; j++){
  for (i = j-1; i <= 99; i+=j) {
  valueListI = list[i];
  // The tile flips when it is multiplied by -1 because the value the position is
  valueListI = valueListI * (-1);
  list[i] = valueListI;
  }
}
// print the 100 lockers (0-99)
for (i = 0; i <= 99; i++){
    console.log(i + ": " + list[i]);
}
// closed locker counter
for (var i = 0; i <= 99; i++) {
  if (list[i] == -1) {
    b++;
  }
}
console.log("Open lockers: " + b);