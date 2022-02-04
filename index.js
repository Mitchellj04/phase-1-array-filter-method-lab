// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findingMatch(drivers, query){
    return drivers.filter(function(drivers){
        return drivers.toLowerCase() === query.toLowerCase();
    })
};




