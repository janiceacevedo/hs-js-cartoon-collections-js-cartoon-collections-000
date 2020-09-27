// var dwarfNames = ["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  var dwarfNames = [];
  for (let i = 0; i < dwarves.length; i++) {
    dwarfNames.push([i + 1] + ". " + dwarves[i]);
  }
  return dwarfNames.join(" ") + " ";
}

function summonCaptainPlanet(planeteerCalls) {
  var array = [];
  for (let i = 0; i < planeteerCalls.length; i++) {
    array.push(planeteerCalls[i].toUpperCase() + "!");
  }
  return array;
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true;
    }
  }
  return false;
}

var cheese = ["cheedar", "gouda", "camembert"]
function findTheCheese (foods) {
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === "cheddar") {
      return "cheddar";
  } else if (foods[i] === "gouda") {
    return "gouda";
  } else if (foods[i] === "camembert") {
    return "camembert";
  }
}
return "no cheese!";
}
