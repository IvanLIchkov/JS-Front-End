function convert(json){
    let info = JSON.parse(json);

    for (const key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }
};
convert('{"name": "George", "age": 40, "town": "Sofia"}')