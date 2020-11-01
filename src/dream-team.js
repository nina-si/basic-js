const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) && members.length != 0) {
    let team = [];
    members.forEach((e) => {
      if (typeof e === 'string') {
        team.push(e.trim()[0].toUpperCase())
      }
    })  
    return team.sort().join('');
  } else {
    return false;
  }
};
