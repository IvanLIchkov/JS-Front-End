function pascal(string){
    console.log(string.split(/(?=[A-Z])/).join(', '));
};
pascal('SplitMeIfYouCanHaHaYouCantOrYouCan')