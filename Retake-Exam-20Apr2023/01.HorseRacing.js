function solve(input) {
  let horses = input[0].split("|");

  for (let i = 1; i <=input.length; i++) {
    let [command, horseName, overtakenHorse] = input[i].split(" ");
    if (command === "Retake") {
      let index1 = horses.indexOf(horseName);
      let index2 = horses.indexOf(overtakenHorse);
      if (index1 < index2) {
        let overtakingHorse = horses[index1];
        let overtakenHorse = horses[index2];

        horses[index1] = overtakenHorse;
        horses[index2] = overtakingHorse;
        console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
      }
    } else if (command === "Trouble") {
      let index = horses.indexOf(horseName);
      if (index > 0) {
        let overtakingHorse = horses[index];
        let overtakenHorse = horses[index - 1];

        horses[index] = overtakenHorse;
        horses[index - 1] = overtakingHorse;
        console.log(`Trouble for ${horseName} - drops one position.`);
      }
    } else if (command === "Rage") {
      let index = horses.indexOf(horseName);
        if (horses.length-3 >= index) {
          let counter = 0;
          while (counter < 2) {
            let overtakingHorse = horses[index];
            let overtakenHorse = horses[index + 1];

            horses[index] = overtakenHorse;
            horses[index + 1] = overtakingHorse;
            index++;
            counter++;
          }
          console.log(`${horseName} rages 2 positions ahead.`);

        } else if (horses.length-2  == index) {
          let overtakingHorse = horses[index];
          let overtakenHorse = horses[horses.length - 1];

          horses[index] = overtakenHorse;
          horses[horses.length - 1] = overtakingHorse;

          console.log(`${horseName} rages 2 positions ahead.`);
        }else{
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
    } else {
      let winner = horses[horses.length - 1];
      console.log(horses.join("->"));
      console.log(`The winner is: ${winner}`);
      return;
    }
  }
}


solve(['Onyx|Domino|Sugar',
'Rage Domino',
'Finish'])
;
