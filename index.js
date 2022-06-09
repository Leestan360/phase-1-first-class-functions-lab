// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
    let newArr = arr.slice(0, 2);
    return newArr;
}

function returnLastTwoDrivers(arr) {
    let newArr = arr.slice(-2);
    return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiply) {
    return function(value) {
        return multiply * value;
    }
}

function fareDoubler(createFareMultiplier) {
    return createFareMultiplier * 2;
}

function fareTripler(createFareMultiplier) {
    return createFareMultiplier * 3;
}

const selectDifferentDrivers = function(arrayOfDrivers, selectedDrivers) {
    return selectedDrivers(arrayOfDrivers);
}