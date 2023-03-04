function cats(input){

    let cats = [];

    class Cat{
       constructor(name, age) {
        this.name = name;
        this.age = age;
       }

       meow(age, name){
        console.log(`${this.name}, age ${this.age} says Meow`);
       }
    }
    for (const line of input) {
        let [name, age] = line.split(' ');
        cats.push(new Cat(name, age));
    }

    for (const cat of cats) {
        cat.meow();
    }   
};
cats(['Mellow 2', 'Tom 5'])