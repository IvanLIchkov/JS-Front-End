function name(num, command1, command2, command3, command4, command5) {
  let commands = [command1, command2, command3, command4, command5];
  let number = num;
  for (let i = 0; i < 5; i++) {
    let command = commands[i];
    switch (command) {
      case "chop":
        number/=2;
        break;
      case "dice":
        number = Math.sqrt(number);
        break;
      case "spice":
        number+=1;
        break;
      case "bake":
        number*=3;
        break;
      case "fillet":
        number*=0.80;
        number = number.toFixed(1)
        break;
    }
    console.log(number);
  }
};
name('9', 'dice', 'spice', 'chop', 'bake',

'fillet')
