var temp = prompt("What is the temperature?");
console.log("The temperature is" + temp + " degrees.");
if (temp > 80) {
  console.log("Time to swim.");
}

var precip = prompt("Is it raining?");
if (precip === "yes") {
  precip = true;
} else {
  precip = false;
}

if (temp > 80 && precip) {
  console.log("It's time to swim.");
}

var precip = prompt("Is it raining, snowing, or sunny?");
if (precip === "snowing" || precip === "raining") {
  console.log("nope nope nope nope nope");
} else {
  console.log("POOOOOL PARRTTTYYYY");
}

var indoors = true;
if (indoors) {
  console.log("Time to swim");
}
