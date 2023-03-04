let personalInformation = {
  firstName: "Ivan",
  lastName: "Petrov",
  age: 28,
  eyeColor: 'Brown',
  isMale: true
};

//Built-in method library
let objectProperties = Object.keys(personalInformation);
let objectValues = Object.values(personalInformation);
let objectEntries = Object.entries(personalInformation);

//Dynamic add property
personalInformation.weight = 80;

//delete property 
delete personalInformation.weight;

//using bracket syntax
console.log(personalInformation['firstName']); //bracket syntax
console.log(personalInformation.firstName); //dot syntax

//acces property by variable
let propertyName = 'firstName';
console.log(personalInformation[propertyName]);

//using different name for property name
let carInfo = { //ако имаме ключ който е със специални символи и е нужно да е стринд той може да бъде достъпен само с carInfo['car-model'] бракет синтаксиса
  'car-model': 'toyota',
};
console.log(carInfo['car-model']);  