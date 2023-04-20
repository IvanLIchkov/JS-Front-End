function solve(arr) {
  let horses = arr.shift().split("|");

  for (const element of arr) {
    let [command, horseName, overtakenHorse] = element.split(" ");

    if (command === "Finish") {
        let winner = horses[horses.length - 1];
        console.log(horses.join("->"));
        console.log(`The winner is: ${winner}`);
        return;
    } else if (command === "Retake") {
      let index1 = horses.indexOf(horseName);
      let index2 = horses.indexOf(overtakenHorse);

      if (index1 < index2) {
        let temp1 = horses[index1];
        let temp2 = horses[index2];

        horses[index1] = temp2;
        horses[index2] = temp1;
        console.log(`${horseName} retakes ${overtakenHorse}.`);
      }
    } else if (command === "Trouble") {
      let index = horses.indexOf(horseName);
      if (index > 0) {
        let temp1 = horses[index];
        let temp2 = horses[index - 1];

        horses[index] = temp2;
        horses[index - 1] = temp1;
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    } else if (command === "Rage") {
      let index = horses.indexOf(horseName);
      if (horses.length - (index + 2) >= 0) {
        let counter = 1;
        while (counter <= 2) {
          let overtakingHorse = horses[index];
          let overtakenHorse = horses[index + 1];

          horses[index] = overtakenHorse;
          horses[index + 1] = overtakingHorse;
          index++;
          counter++;
        }
        console.log(`${horseName} rages 2 positions ahead.`);
      } else if (horses.length - (index + 1) === 1) {
        let overtakingHorse = horses[index];
        let overtakenHorse = horses[horses.length - 1];

        horses[index] = overtakenHorse;
        horses[horses.length - 1] = overtakingHorse;

        console.log(`${horseName} rages 2 positions ahead.`);
      }
    } else if (command === "Miracle") {
        horseName = horses[0];
        if(horses.length>1){
          for (let i = 0; i < horses.length - 1; i++) {
              let overtakingHorse = horses[i];
              let overtakenHorse = horses[i + 1];
      
              horses[i] = overtakenHorse;
              horses[i + 1] = overtakingHorse;
            }
            console.log(`What a miracle - ${horseName} becomes first.`);
        }
    }
  }
}
solve(['Fancy|Lilly',
'Retake Lilly Fancy',
'Trouble Lilly',
'Trouble Lilly',
'Finish',
'Rage Lilly'])


