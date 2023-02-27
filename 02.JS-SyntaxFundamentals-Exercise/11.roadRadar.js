function radar(speed, area) {
  switch (area) {
    case "motorway":
        if(speed<=130){
            console.log(`Driving ${speed} km/h in a 130 zone`);
        }else{
            console.log(`The speed is ${speed-130} km/h faster than the allowed speed of 130 - ${speedStatus(speed-130)}`);
        }
      break;
    case "interstate":
      if(speed<=90){
        console.log(`Driving ${speed} km/h in a 90 zone`);
    }else{
        console.log(`The speed is ${speed-90} km/h faster than the allowed speed of 90 - ${speedStatus(speed-90)}`);
    }
      break;
    case "city":
      if(speed<=50){
        console.log(`Driving ${speed} km/h in a 50 zone`);
    }else{
        console.log(`The speed is ${speed-50} km/h faster than the allowed speed of 50 - ${speedStatus(speed-50)}`);
    }
      break;
    case "residential":
      if(speed<=20){
        console.log(`Driving ${speed} km/h in a 20 zone`);
    }else{
        console.log(`The speed is ${speed-20} km/h faster than the allowed speed of 20 - ${speedStatus(speed-20)}`);
    }
      break;
  }
  function speedStatus(diference){
    if(diference<=20){
        return 'speeding'
    }else if(diference<=40){
        return 'excessive speeding'
    }else{
        return 'reckless driving'
    }
  }
};

radar(120, 'interstate')
