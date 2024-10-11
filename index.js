// Code your solution here
function findMatching(drivers, names){
    return drivers.filter(driver => driver.toLowerCase() === names.toLowerCase());
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

function matchName (drivers, name){
    return drivers.filter(driver => driver.name === name);
}