function dogSleep(){
    console.log('sleeping');
};
let dog = {
    name: 'Balkan',
    bark: function(input){
        console.log('wof wof');
    },
    eat: () => console.log('yum yum'),
    sleep: dogSleep,

    //Object method notation
    play(){
            console.log('Dog playing');
    }
}
dog. run = () =>{
    console.log('Dog running');
}


dog.bark(); 
dog.eat();
dog.sleep();
dog.play(); 
dog.run();