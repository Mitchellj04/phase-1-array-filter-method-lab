// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, query){
   return drivers.filter(function(driver){
       return driver.toLowerCase() === query.toLowerCase()
   })
}


function fuzzyMatch(drivers, array){
    const lengthOfArray = array.length 
    return drivers.filter(function(driver){
        return driver.slice(0, lengthOfArray) === array
    })
}

function matchName(drivers, array){
    const result = drivers.filter(driver => driver.name === array)
    return result
}