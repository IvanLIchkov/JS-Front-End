function vacantion(num, type, day){
    let price = 0;
    if(type==='Students'){
        if(day === 'Friday'){
            price = 8.45;
        }else if(day === 'Saturday'){
            price = 9.80;
        }else if(day === 'Sunday'){
            price = 10.46;
        }  
        price*=num;
        if(num>=30){
            price*=0.85;
        }
    }else if(type==='Business'){
        if(day === 'Friday'){
            price = 10.90;
        }else if(day === 'Saturday'){
            price = 15.60;
        }else if(day === 'Sunday'){
            price = 16;
        }  
        if(num>=100){
            price*=num-10;
        }else{
            price*=num;
        }
    }else if(type==='Regular'){
        if(day === 'Friday'){
            price = 15;
        }else if(day === 'Saturday'){
            price = 20;
        }else if(day === 'Sunday'){
            price = 22.50;
        }  
        price*=num;
        if(num>=10 && num<=20){
            price*=0.95;
        }
    }
    console.log(`Total price: ${(price).toFixed(2)}`);
};
vacantion(30,

    "Students",
    
    "Sunday")