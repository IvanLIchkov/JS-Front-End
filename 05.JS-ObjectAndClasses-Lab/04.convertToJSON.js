function convertToJSON(firstName, lastName, hairColor){
    let info = {
        name: firstName,
        lastName: lastName,
        hairColor: hairColor
    }
    let infoInJson = JSON.stringify(info);
    console.log(infoInJson);
};
convertToJSON('George', 'Jones',

'Brown')