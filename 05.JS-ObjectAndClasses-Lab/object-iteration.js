let info= {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 28,
    eyeColor: 'Brown',
    isMale: true
  };

  //iterate values
  for (const value of Object.values(info)) {
        console.log(value);
  }

  //iterrate values
  for (const key of Object.keys(info)) {
    console.log(`${key} - ${info[key]}`);
  }