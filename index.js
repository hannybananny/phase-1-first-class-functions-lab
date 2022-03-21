// Code your solution in this file!

const returnFirstTwoDrivers = driver => driver.slice(0,2)

const returnLastTwoDrivers = driver => driver.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fare) {
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfdrivers, nameOfFunction) {
    return nameOfFunction(arrayOfdrivers)
}

