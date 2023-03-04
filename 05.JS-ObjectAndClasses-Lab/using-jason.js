let info = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 28,
  eyeColor: "Brown",
  isMale: true,
};

//transfering JS object into JSON
let infoJSON = JSON.stringify(info);
console.log(infoJSON);

//transfering JSON into JS object
let convertedInfo = JASON.parse(infoJSON);
console.log(convertedInfo);
