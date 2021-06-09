function checkFuel(level) {
  if (level > 100000){
    return 'green';
  } else if (level > 50000){
    return 'yellow';
  } else {
    return 'red';
  }
}

function holdStatus(arr){
  if (arr.length < 7) {
    return `Spaces available: ${7-arr.length}.`;
  } else if (arr.length > 7){
    return `Over capacity by ${arr.length-7} items.`;
  } else {
    return "Full";
  }
}

let fuelLevel = 200000;
let cargoHold = ['meal kits', 'space suits', 'first-aid kit', 'satellite', 'gold', 'water', 'AE-35 unit'];
let notSuspicious = function(level){
if (checkFuel(level)=== 'green'){
  return level - 100001;
} else if(checkFuel(level) === 'yellow'){
  return level - 50001;
} else{
  return level;
}
};
let irs = function(fuelLevel,cargoHold){
  let item1 =cargoHold.splice(4,1,'water');
  let item2 = cargoHold.splice(6,1,'Stanley Kubrick');
  return `Raided ${notSuspicious(fuelLevel)} kg of fuel from the tanks, and stole ${item1} and ${item2} from the cargo hold.`
}

console.log("Fuel level: " + checkFuel(fuelLevel));
console.log("Hold status: " + holdStatus(cargoHold));
console.log(irs(fuelLevel,cargoHold));
